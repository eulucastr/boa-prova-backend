import type { FastifyInstance } from "fastify";
import { UsuarioUseCase } from "../app/usecases/usuario.usecase.js";
import type { IUsuarioCreate } from "../app/interfaces/usuario.interface.js";

export async function usuarioRoutes(fastify: FastifyInstance) {
  const usuarioUseCase = new UsuarioUseCase();
  
  fastify.post<{Body: IUsuarioCreate}>('/', async (req, reply) => {
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
  
  fastify.get('/', (req, reply) => {
    return reply.send({ message: 'Listar usuários' });
  })
} 