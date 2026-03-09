import fastify, { type FastifyInstance } from 'fastify'
import { usuarioRoutes } from './routes/usuario.routes.js'
import swaggerPlugin from './plugins/swagger.plugin.js'
import corsPlugin from './plugins/cors.plugin.js'
import oauthPlugin from './plugins/oauth.plugin.js'

const app: FastifyInstance = fastify({
  logger: true
}) 

app.register(swaggerPlugin)
app.register(corsPlugin)
app.register(oauthPlugin)

app.register(usuarioRoutes, {
  prefix: '/usuarios'
})

app.listen({
  port: 3333
}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server is running at ${address}`)
})