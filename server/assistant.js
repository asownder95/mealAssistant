const { dialogflow } = require('actions-on-google');

const assistant = dialogflow({ debug: true });
const { askNamePermission } = require('../fulfillment/handlers.js');

assistant.intent('Default Welcome Intent', askNamePermission);

assistant.catch((conv, err) => {
  console.error(err);
  conv.close('Oops! Something went wrong. Sorry!');
});

module.exports = assistant;
