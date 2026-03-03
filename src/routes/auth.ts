import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { prisma } from '../lib/prisma'
import { requireAuth } from '../middlewares/auth'

// Schemas de validação
const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  senha: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
})

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  senha: z.string().min(1, 'Senha é obrigatória')
})

// Interface para o token do Google
interface GoogleUserInfo {
  id: string
  email: string
  name: string
  picture?: string
}

export async function authRoutes(app: FastifyInstance) {
  // ==========================================
  // REGISTRO COM EMAIL/SENHA
  // ==========================================
  app.post('/auth/register', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = registerSchema.parse(request.body)

      // Verificar se email já existe
      const existingEmail = await prisma.usuario.findUnique({
        where: { email: body.email }
      })

      if (existingEmail) {
        return reply.status(400).send({ error: 'Email já cadastrado' })
      }

      // Verificar se nome já existe
      const existingNome = await prisma.usuario.findUnique({
        where: { nome: body.nome }
      })

      if (existingNome) {
        return reply.status(400).send({ error: 'Nome de usuário já existe' })
      }

      // Hash da senha
      const senhaHash = await bcrypt.hash(body.senha, 10)

      // Criar usuário
      const usuario = await prisma.usuario.create({
        data: {
          email: body.email,
          nome: body.nome,
          senha_hash: senhaHash
        },
        select: {
          id: true,
          email: true,
          nome: true,
          avatar_url: true,
          created_at: true
        }
      })

      // Gerar token JWT
      const token = app.jwt.sign({
        sub: usuario.id,
        email: usuario.email,
        nome: usuario.nome
      })

      return reply.status(201).send({
        user: usuario,
        token
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({ 
          error: 'Dados inválidos', 
          details: error.issues 
        })
      }
      console.error('Erro no registro:', error)
      return reply.status(500).send({ error: 'Erro interno do servidor' })
    }
  })

  // ==========================================
  // LOGIN COM EMAIL/SENHA
  // ==========================================
  app.post('/auth/login', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = loginSchema.parse(request.body)

      // Buscar usuário pelo email
      const usuario = await prisma.usuario.findUnique({
        where: { email: body.email }
      })

      if (!usuario) {
        return reply.status(401).send({ error: 'Email ou senha inválidos' })
      }

      // Verificar se usuário tem senha (não é OAuth-only)
      if (!usuario.senha_hash) {
        return reply.status(401).send({ 
          error: 'Esta conta foi criada via login social. Por favor, use o método de login correspondente.' 
        })
      }

      // Verificar senha
      const senhaValida = await bcrypt.compare(body.senha, usuario.senha_hash)

      if (!senhaValida) {
        return reply.status(401).send({ error: 'Email ou senha inválidos' })
      }

      // Gerar token JWT
      const token = app.jwt.sign({
        sub: usuario.id,
        email: usuario.email,
        nome: usuario.nome
      })

      return reply.send({
        user: {
          id: usuario.id,
          email: usuario.email,
          nome: usuario.nome,
          avatar_url: usuario.avatar_url
        },
        token
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({ 
          error: 'Dados inválidos', 
          details: error.issues 
        })
      }
      console.error('Erro no login:', error)
      return reply.status(500).send({ error: 'Erro interno do servidor' })
    }
  })

  // ==========================================
  // OBTER USUÁRIO AUTENTICADO
  // ==========================================
  app.get('/auth/me', { preHandler: [requireAuth] }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id: request.user.sub },
        select: {
          id: true,
          email: true,
          nome: true,
          avatar_url: true,
          oauth_provider: true,
          created_at: true
        }
      })

      if (!usuario) {
        return reply.status(404).send({ error: 'Usuário não encontrado' })
      }

      return reply.send({ user: usuario })
    } catch (error) {
      console.error('Erro ao buscar usuário:', error)
      return reply.status(500).send({ error: 'Erro interno do servidor' })
    }
  })

  // ==========================================
  // CALLBACK DO GOOGLE OAUTH
  // ==========================================
  app.get('/auth/google/callback', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      // Obter token do Google
      const { token } = await (app as any).googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request)

      // Buscar informações do usuário no Google
      const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${token.access_token}`
        }
      })

      if (!response.ok) {
        throw new Error('Falha ao obter dados do Google')
      }

      const googleUser: GoogleUserInfo = await response.json()

      // Verificar se usuário já existe com este Google ID
      let usuario = await prisma.usuario.findFirst({
        where: {
          oauth_provider: 'google',
          oauth_id: googleUser.id
        }
      })

      if (!usuario) {
        // Verificar se existe usuário com mesmo email
        const existingByEmail = await prisma.usuario.findUnique({
          where: { email: googleUser.email }
        })

        if (existingByEmail) {
          // Vincular conta Google ao usuário existente
          usuario = await prisma.usuario.update({
            where: { id: existingByEmail.id },
            data: {
              oauth_provider: 'google',
              oauth_id: googleUser.id,
              avatar_url: googleUser.picture
            }
          })
        } else {
          // Criar novo usuário
          // Gerar nome único se necessário
          let nomeBase = googleUser.name || googleUser.email.split('@')[0]
          let nome = nomeBase
          let counter = 1

          while (await prisma.usuario.findUnique({ where: { nome } })) {
            nome = `${nomeBase}${counter}`
            counter++
          }

          usuario = await prisma.usuario.create({
            data: {
              email: googleUser.email,
              nome,
              oauth_provider: 'google',
              oauth_id: googleUser.id,
              avatar_url: googleUser.picture
            }
          })
        }
      } else {
        // Atualizar avatar se mudou
        if (googleUser.picture && usuario.avatar_url !== googleUser.picture) {
          usuario = await prisma.usuario.update({
            where: { id: usuario.id },
            data: { avatar_url: googleUser.picture }
          })
        }
      }

      // Gerar token JWT
      const jwtToken = app.jwt.sign({
        sub: usuario.id,
        email: usuario.email,
        nome: usuario.nome
      })

      // Redirecionar para o frontend com o token
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000'
      return reply.redirect(`${frontendUrl}/auth/callback?token=${jwtToken}`)
    } catch (error) {
      console.error('Erro no callback do Google:', error)
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000'
      return reply.redirect(`${frontendUrl}/auth/error?message=Falha na autenticação`)
    }
  })

  // ==========================================
  // ALTERAR SENHA
  // ==========================================
  app.put('/auth/password', { preHandler: [requireAuth] }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const schema = z.object({
        senha_atual: z.string().min(1, 'Senha atual é obrigatória'),
        nova_senha: z.string().min(6, 'Nova senha deve ter no mínimo 6 caracteres')
      })

      const body = schema.parse(request.body)

      const usuario = await prisma.usuario.findUnique({
        where: { id: request.user.sub }
      })

      if (!usuario || !usuario.senha_hash) {
        return reply.status(400).send({ 
          error: 'Usuário criado via login social não possui senha para alterar' 
        })
      }

      // Verificar senha atual
      const senhaValida = await bcrypt.compare(body.senha_atual, usuario.senha_hash)

      if (!senhaValida) {
        return reply.status(401).send({ error: 'Senha atual incorreta' })
      }

      // Hash da nova senha
      const novaSenhaHash = await bcrypt.hash(body.nova_senha, 10)

      await prisma.usuario.update({
        where: { id: usuario.id },
        data: { senha_hash: novaSenhaHash }
      })

      return reply.send({ message: 'Senha alterada com sucesso' })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({ 
          error: 'Dados inválidos', 
          details: error.issues 
        })
      }
      console.error('Erro ao alterar senha:', error)
      return reply.status(500).send({ error: 'Erro interno do servidor' })
    }
  })

  // ==========================================
  // DEFINIR SENHA (para usuários OAuth)
  // ==========================================
  app.post('/auth/set-password', { preHandler: [requireAuth] }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const schema = z.object({
        senha: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
      })

      const body = schema.parse(request.body)

      const usuario = await prisma.usuario.findUnique({
        where: { id: request.user.sub }
      })

      if (!usuario) {
        return reply.status(404).send({ error: 'Usuário não encontrado' })
      }

      if (usuario.senha_hash) {
        return reply.status(400).send({ 
          error: 'Usuário já possui senha. Use a rota de alterar senha.' 
        })
      }

      // Hash da senha
      const senhaHash = await bcrypt.hash(body.senha, 10)

      await prisma.usuario.update({
        where: { id: usuario.id },
        data: { senha_hash: senhaHash }
      })

      return reply.send({ message: 'Senha definida com sucesso' })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({ 
          error: 'Dados inválidos', 
          details: error.issues 
        })
      }
      console.error('Erro ao definir senha:', error)
      return reply.status(500).send({ error: 'Erro interno do servidor' })
    }
  })
}
