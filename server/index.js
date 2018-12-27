const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');
const { askNamePermission } = require('../fulfillment/handlers.js');

const assistant = dialogflow();

assistant.intent('Default Welcome Intent', askNamePermission);

assistant.catch((conv, err) => {
  console.error(err);
  conv.close('Oops! Something went wrong. Sorry!');
});

const server = express();
server.use(cors());
server.use(bodyParser.json());
// server.get('/test', (req, res) => {
//   res.send('Server is running and routes are working');
// });

server.use('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('Hello, World!');
});

server.use(assistant);

if (require.main === module) {
  server.listen(3000, () => console.log('Webhook fulfillment server listening!'));
}

module.exports = server;
