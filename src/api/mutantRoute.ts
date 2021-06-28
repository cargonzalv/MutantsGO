import { MutantAttrs } from 'db/schemas/mutantSchema';
import { FastifyInstance, FastifyPluginOptions, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { HumanService, StatsService } from '../services';
import { Db } from '../db/index';

// Declaration merging
declare module 'fastify' {
  export interface FastifyInstance {
    db: Db;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MutantRoute: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.post<{ Body: MutantAttrs }>('/mutant', {}, async (request, reply) => {
    try {
      const { Mutant } = server.db.models;
      const body = request.body;
      const human = new HumanService(body.dna);

      const isMutant = human.isMutant();
      body.is_mutant = isMutant;

      const mutant = await Mutant.addOne(request.body);
      await mutant.save();
      return isMutant ? reply.code(200).send(mutant) : reply.code(403).send('No tiene permisos para entrar');
    } catch (error) {
      request.log.error(error);
      return reply.send(500);
    }
  });
  server.get('/stats', {}, async (request, reply) => {
    try {
      const { Mutant } = server.db.models;
      const humans = await Mutant.find({});

      const statsService = new StatsService();

      const stats = statsService.getStats(humans);

      return reply.code(200).send(stats);
    } catch (error) {
      request.log.error(error);
      return reply.send(500);
    }
  });
};

export default fp(MutantRoute);
