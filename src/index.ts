import config from 'config';
import { fastify } from 'fastify';
import pino from 'pino';
import db from './db/index';
import MutantRoutes from './api/mutantRoute';
import * as sourceMapSupport from 'source-map-support';
import { DocsRoute } from './docsConfig';

sourceMapSupport.install();
const Port = process.env.PORT || 3001;
const uri = config.get('db')?.uri || 'mongodb://localhost:27017/mutants';
const server = fastify({
  logger: pino({ level: 'info' }),
});

// register plugin below:
server.register(db, { uri });
// eslint-disable-next-line @typescript-eslint/no-var-requires
server.register(require('fastify-swagger'), DocsRoute);
server.register(MutantRoutes);

const start = async () => {
  try {
    await server.listen(Port);
    console.log('Server started successfully');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
process.on('uncaughtException', (error) => {
  console.error(error);
});

process.on('unhandledRejection', (error) => {
  console.error(error);
});

start();
