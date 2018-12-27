const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const assistant = require('./assistant.js');

const server = express();
const port = process.env.PORT || 3000;
server.use(cors());
server.use(bodyParser.json());

server.get('/test', (req, res) => {
  res.send('Server is running and routes are working');
});

server.post('/webhook', assistant);

if (require.main === module) {
  server.listen(port, () => console.log(`Webhook fulfillment server listening on port ${port}`));
}

module.exports = server;
