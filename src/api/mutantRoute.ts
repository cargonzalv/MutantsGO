import { FastifyInstance, FastifyPluginOptions, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { Db } from '../db/index';

// Declaration merging
declare module 'fastify' {
  export interface FastifyInstance {
    db: Db;
  }
}

interface blogParams {
  id: string;
}

const BlogRoute: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/blogs', {}, async (request, reply) => {
    try {
      const { Blog } = server.db.models;
      const blogs = await Blog.find({});
      return reply.code(200).send(blogs);
    } catch (error) {
      request.log.error(error);
      return reply.send(500);
    }
  });
};
export default fp(BlogRoute);
