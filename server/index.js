const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const app = dialogflow({ debug: true });



const server = express();
server.use(bodyParser.json(), app);
server.get('/', () => {
  console.log('Hit the / endpoint');
});
server.listen(3000);
