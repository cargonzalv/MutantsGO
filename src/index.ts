import dotenv from 'dotenv';
import { fastify } from 'fastify';
import pino from 'pino';
import db from './db/index';
import BlogRoutes from './api/mutantRoute';

dotenv.config();
const Port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
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
