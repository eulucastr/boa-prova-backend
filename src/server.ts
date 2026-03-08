import fastify, { type FastifyInstance } from 'fastify'
import { usuarioRoutes } from './routes/usuario.routes.js'

const app: FastifyInstance = fastify({
  logger: true
}) 

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