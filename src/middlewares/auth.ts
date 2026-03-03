import { FastifyRequest, FastifyReply } from 'fastify'

// Middleware para rotas que exigem autenticação
export async function requireAuth(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.status(401).send({ error: 'Não autorizado. Token inválido ou ausente.' })
  }
}

// Middleware opcional - não bloqueia, mas popula user se token existe
export async function optionalAuth(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    // Silenciosamente ignora erros de token - usuário continua não autenticado
  }
}
