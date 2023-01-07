const SlackBot = require('slackbots');

const bot = new SlackBot({
  token: 'SLACK_BOT_TOKEN',
  name: 'ToggleBot'
});

bot.on('message', (message) => {
  if (message.type !== 'message') {
    return;
  }

  const [command, ...body] = message.text.split(' ');

  if (command === '/toggle') {
    // Send a ToggleIntent request to the handler function
    handler({
      requestEnvelope: {
        request: {
          type: 'IntentRequest',
          intent: {
            name: TOGGLE_INTENT,
            token: body.join(' ')
          }
        }
      }
    });
  }
});

bot.on('error', (error) => {
  console.error(error);
});

bot.on('close', () => {
  console.log('Connection closed');
});
