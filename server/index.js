const server = require('fastify')();

const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

server.get('/', async (request, reply) => ({ hello: 'world' }));

start();
