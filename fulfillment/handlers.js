const { Permission } = require('actions-on-google');

const askNamePermission = (conv) => {
  try {
    console.log('Invoking the askNamePermission handler');
    const name = conv.user.storage.name;
    if (!name) {
      conv.ask(new Permission({
        context: 'Welcome to Meal Assistant! To provide you a personalized experience',
        permissions: 'NAME',
      }));
    } else {
      conv.ask(`Good to hear from you again ${name.given}! What would you like to do today?`);
    }
  } catch (err) {
    console.log(`Error in server: ${JSON.stringify(err)}`);
  }
};

module.exports = {
  askNamePermission,
};
