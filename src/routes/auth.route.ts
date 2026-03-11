import { type FastifyInstance, type FastifyRequest, type FastifyReply } from 'fastify'
import { prisma } from '../prisma/prima-client.js'

// Interface para o token do Google
interface GoogleUserInfo {
  id: string
  email: string
  name: string
}

export async function authRoutes(app: FastifyInstance) {
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
            }
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
}
