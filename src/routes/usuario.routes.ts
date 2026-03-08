import type { FastifyInstance } from "fastify";
import { UsuarioUseCase } from "../app/usecases/usuario.usecase.js";
import type { IUsuarioCreate } from "../app/interfaces/usuario.interface.js";

export async function usuarioRoutes(fastify: FastifyInstance) {
  const usuarioUseCase = new UsuarioUseCase();
  
  fastify.get('/', {
    schema: {
      description: 'Listar todos os usuários',
      tags: ['Usuários'],
      response: {
        200: {
          description: 'Lista de usuários',
          type: 'object',
          properties: {
            message: { type: 'string' },
          }
        }
      }
    }
  }, (req, reply) => {
    return reply.send({ message: 'Listar usuários' });
  })
  
  fastify.post<{ Body: IUsuarioCreate }>('/', {
    schema: {
      description: 'Criar um novo usuário',
      tags: ['Usuários'],
      body: {
        type: 'object',
        required: ['nome', 'email'],
        properties: {
          nome: { type: 'string' },
          email: { type: 'string' }
        }
      },
      response: {
        201: {
          description: 'Usuário criado com sucesso',
          type: 'object',
          properties: {
            message: { type: 'string' },
            data: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                nome: { type: 'string' },
                email: { type: 'string' },
                criado_em: { type: 'string', format: 'date-time' },
                atualizado_em: { type: 'string', format: 'date-time' }
              }
            }
          }
        },
        500: {
          description: 'Erro ao criar usuário',
          type: 'object',
          properties: {
            message: { type: 'string' },
            error: { type: 'string' }
          }
        }
      }
    }
  }, async (req, reply) => {
    try {
      const { nome, email } = req.body;
      const data = await usuarioUseCase.create({
        nome,
        email
      })
      
      return reply.status(201).send({ message: 'Usuário criado com sucesso', data });
    }
    catch (error) {
      console.error(error);
      return reply.status(500).send({ message: 'Erro ao criar usuário', error });
    }
  })
} 