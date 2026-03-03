import Fastify from 'fastify'
import cookie from '@fastify/cookie'
import jwtPlugin from './plugins/jwt'
import oauthPlugin from './plugins/oauth'
import { authRoutes } from './routes/auth'

const app = Fastify({
  logger: true
})

// Registrar plugins
app.register(cookie)
app.register(jwtPlugin)
app.register(oauthPlugin)

// Registrar rotas
app.register(authRoutes)

// Nossa primeira "Rota" (o endereço que o site vai acessar)
app.get('/', async () => {
  return { message: "O backend do Boa Prova está online! 🚀" }
})

// Faz o servidor rodar na porta 3333
const PORT = Number(process.env.PORT) || 3333

app.listen({ port: PORT, host: '0.0.0.0' }).then(() => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})