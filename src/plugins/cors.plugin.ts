import { type FastifyInstance } from "fastify";
import fp from 'fastify-plugin'
import Cors from "@fastify/cors";

// Cors Policies Options
const corsOptions = {
    // Allow all origins
    // VERY IMPORTANT: In response, the server returns an Access-Control-Allow-Origin header with Access-Control-Allow-Origin: *
    // which means that the resource can be accessed by any origin. (VERY DANGER!)
    // You can read more about in:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    origin: "*"
};

async function corsPlugin(fastify: FastifyInstance) {
    fastify.register(Cors, corsOptions)
}

export default fp(corsPlugin, {
  name: 'cors-plugin'
})
