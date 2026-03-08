import fp from 'fastify-plugin'
import { type FastifyInstance } from 'fastify'
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

async function swaggerPlugin(app: FastifyInstance) {
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
}

export default fp(swaggerPlugin, {
  name: 'swagger-plugin'
})
