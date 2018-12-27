const { dialogflow } = require('actions-on-google');

const assistant = dialogflow({ debug: true });
const { askNamePermission, askInitialIntent } = require('../fulfillment/handlers.js');

assistant.intent('Default Welcome Intent', askNamePermission);
assistant.intent('actions_intent_PERMISSION', askInitialIntent);

assistant.catch((conv, err) => {
  console.error(err);
  conv.close('Oops! Something went wrong. Sorry!');
});

module.exports = assistant;
