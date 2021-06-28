import * as config from 'config';
import { fastify } from 'fastify';
import pino from 'pino';
import db from './db/index';
import BlogRoutes from './api/mutantRoute';
import * as sourceMapSupport from 'source-map-support';

sourceMapSupport.install();
const Port = process.env.PORT || 3000;
const uri = config.get('db');
const server = fastify({
  logger: pino({ level: 'info' }),
});

// register plugin below:
server.register(db, { uri });
server.register(BlogRoutes);

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
