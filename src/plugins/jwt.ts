import fp from 'fastify-plugin'
import jwt from '@fastify/jwt'
import { FastifyInstance } from 'fastify'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: {
      sub: string
      email: string
      nome: string
    }
    user: {
      sub: string
      email: string
      nome: string
    }
  }
}

async function jwtPlugin(fastify: FastifyInstance) {
  fastify.register(jwt, {
    secret: process.env.JWT_SECRET || 'super-secret-key-change-in-production',
    sign: {
      expiresIn: '7d'
    }
  })

  // Decorator para verificar autenticação
  fastify.decorate('authenticate', async function (request: any, reply: any) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.status(401).send({ error: 'Token inválido ou expirado' })
    }
  })
}

export default fp(jwtPlugin, {
  name: 'jwt-plugin'
})
