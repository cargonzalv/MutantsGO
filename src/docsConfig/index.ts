const DocsRoute = {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Mutants API Documentation',
      description: 'Fastify swagger Mutants API',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'mutant', description: 'Mutant related end-points' },
      { name: 'stats', description: 'Stats related end-points' },
    ],
    definitions: {
      Mutants: {
        type: 'object',
        required: ['_id', 'dna'],
        properties: {
          _id: { type: 'string', format: 'uuid' },
          dna: { type: 'array', items: { type: 'string' } },
          is_mutant: { type: 'boolean' },
          createdAt: { type: 'string', format: 'timezone' },
          updatedAt: { type: 'string', format: 'timezone' },
        },
      },
    },
  },
  exposeRoute: true,
};

const MutantSchemaDef = {
  schema: {
    description: 'Checks if human is mutant, posts info on db',
    tags: ['mutant'],
    summary: 'Post dna of human',
    body: {
      type: 'object',
      properties: {
        dna: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      example: {
        dna: ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'],
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          _id: { type: 'string', format: 'uuid' },
          dna: { type: 'array', items: { type: 'string' } },
          is_mutant: { type: 'boolean' },
          createdAt: { type: 'string', format: 'timezone' },
          updatedAt: { type: 'string', format: 'timezone' },
        },
        example: {
          dna: ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'],
          _id: '60d9a5256e1ab729044a4e0d',
          is_mutant: true,
          createdAt: '2021-06-28T10:32:05.128Z',
          updatedAt: '2021-06-28T10:32:05.128Z',
          __v: 0,
        },
      },
      401: {
        description: 'Unauthorized',
        type: 'string',
        example: 'Humano detectado. No tiene permisos para entrar',
      },
      500: {
        description: 'Internal Server Error',
        type: 'string',
        example: 'Internal server error',
      },
    },
  },
};

const StatsSchemaDef = {
  schema: {
    description: 'Get stats of humans with tested dna',
    tags: ['stats'],
    summary: 'Get stats',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          count_mutant_dna: { type: 'number' },
          count_human_dna: { type: 'number' },
          ratio: { type: 'number' },
        },
        example: {
          count_mutant_dna: 1,
          count_human_dna: 2,
          ratio: 0.5,
        },
      },
      500: {
        description: 'Internal Server Error',
        type: 'string',
        example: 'Internal server error',
      },
    },
  },
};

export { DocsRoute, MutantSchemaDef, StatsSchemaDef };
