const { Permission, Suggestions } = require('actions-on-google');

const askNamePermission = (conv) => {
  const name = conv.user.storage.name;
  if (!name) {
    conv.ask(new Permission({
      context: 'Welcome to Meal Assistant! To provide you a personalized experience',
      permissions: 'NAME',
    }));
  } else {
    conv.ask(`Good to hear from you again ${name.given}! What would you like to do today?`);
  }
};

const askInitialIntent = (conv, params, permissionGranted) => {
  if (!permissionGranted) {
    conv.ask('Okay, no worries. What would you like to do today?');
    conv.ask(new Suggestions('Search Recipes'));
  } else {
    conv.user.storage.name = conv.user.name;
    conv.ask(`Thanks ${conv.user.storage.name.given}! What would you like to do today?`);
  }
};

module.exports = {
  askNamePermission,
  askInitialIntent,
};
