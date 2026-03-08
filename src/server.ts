import fastify, { type FastifyInstance } from 'fastify'
import { usuarioRoutes } from './routes/usuario.routes.js'
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const app: FastifyInstance = fastify({
  logger: true
}) 

await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Boa Prova API',
      description: 'Documentação do sistema de ranking de concursos',
      version: '1.0.0'
    },
  }
});

await app.register(fastifySwaggerUi, {
  routePrefix: '/docs', 
});

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