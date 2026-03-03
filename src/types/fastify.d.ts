import { FastifyInstance } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: any, reply: any) => Promise<void>
    googleOAuth2: {
      getAccessTokenFromAuthorizationCodeFlow: (request: any) => Promise<{
        token: {
          access_token: string
          token_type: string
          expires_in: number
        }
      }>
    }
  }
}
