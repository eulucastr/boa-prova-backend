import fp from 'fastify-plugin'
import oauth2 from '@fastify/oauth2'
import { FastifyInstance } from 'fastify'

async function oauthPlugin(fastify: FastifyInstance) {
  // Google OAuth2
  fastify.register(oauth2, {
    name: 'googleOAuth2',
    scope: ['profile', 'email'],
    credentials: {
      client: {
        id: process.env.GOOGLE_CLIENT_ID || '',
        secret: process.env.GOOGLE_CLIENT_SECRET || ''
      },
      auth: oauth2.GOOGLE_CONFIGURATION
    },
    startRedirectPath: '/auth/google',
    callbackUri: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3333/auth/google/callback'
  })
}

export default fp(oauthPlugin, {
  name: 'oauth-plugin'
})
