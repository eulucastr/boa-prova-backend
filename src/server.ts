import Fastify from 'fastify'

const app = Fastify()

// Nossa primeira "Rota" (o endereço que o site vai acessar)
app.get('/', async () => {
  return { message: "O backend do Boa Prova está online! 🚀" }
})

// Faz o servidor rodar na porta 3333
app.listen({ port: 3333 }).then(() => {
  console.log("Servidor rodando em http://localhost:3333")
})