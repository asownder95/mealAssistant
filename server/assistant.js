const { dialogflow } = require('actions-on-google');

const assistant = dialogflow({ debug: true });
const { askNamePermission, askInitialIntent, confirmRecipeQuery } = require('../fulfillment/handlers.js');

assistant.intent('Default Welcome Intent', askNamePermission);
assistant.intent('actions_intent_PERMISSION', askInitialIntent);
assistant.intent('Search Recipes', confirmRecipeQuery);

assistant.catch((conv, err) => {
  console.error(err);
  conv.close('Oops! Something went wrong. Sorry!');
});

module.exports = assistant;
