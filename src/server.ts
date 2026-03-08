import fastify, { type FastifyInstance } from 'fastify'

const app: FastifyInstance = fastify({
  logger: true
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