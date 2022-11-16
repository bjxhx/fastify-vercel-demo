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
    const query:any = request.query;
    const url = query.url;
    const res = await axios.get(url,{
      responseType:"arraybuffer"
    })
    reply.header("content-type","image/jpeg")
    return res.data;
  });
}
