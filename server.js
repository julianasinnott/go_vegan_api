import { fastify } from 'fastify';

const server = fastify();

server.listen({
  port: 4000,
});

server.get('/recipes', () => {

})
server.get('/recipes/:id', () => {

})

server.post('/recipes/:id', () => {

})

server.delete('/recipes/:id', () => {

})

server.put('/recipes/:id', () => {

})
