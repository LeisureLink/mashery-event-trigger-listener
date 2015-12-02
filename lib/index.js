'use strict';

const Hapi = require('hapi');
const Formatter = require('./formatter');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000 });

server.route({
  method: '*',
  path: '/{p*}',
  handler: (request, reply) => {
    const response = Formatter.format(request);

    console.log(Formatter.stringify(response) + '\n');

    return reply();
  }
});

server.start(() => console.log(`Server started at ${server.info.uri}`));
