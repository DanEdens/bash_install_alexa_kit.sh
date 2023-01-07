const Alexa = require('ask-sdk-core');

const DiscoverDevicesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DiscoverDevicesIntent';
  },
  handle(handlerInput) {
    // Send a Discover directive to the Alexa service
    return handlerInput.responseBuilder
      .addDirective({
        type: 'Alexa.Discovery',
        discover: {
          endpoint: {
            scope: {
              type: 'BearerToken',
              token: 'access-token-from-request'
            }
          }
        }
      })
      .getResponse();
  }
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    DiscoverDevicesIntentHandler
  )
  .lambda();
