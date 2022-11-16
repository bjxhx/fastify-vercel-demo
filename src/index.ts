import type { FastifyReply, FastifyRequest } from "fastify";
import axios from "axios";
export default async function routes(fastify, options) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world" };
  });

  fastify.get("/hi", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hi: "zakiego" };
  });

  fastify.get("/image", async (request: FastifyRequest, reply: FastifyReply) => {
    request.query
    return request.query;
  });
}
