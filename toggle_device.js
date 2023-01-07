const Alexa = require('ask-sdk-core');

const ToggleIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'ToggleIntent';
  },
  handle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    const token = request.token;
    const powerResult = request.status.powerResult;

    if (powerResult === 'ON') {
      // Turn the device off
      return handlerInput.responseBuilder
        .addDirective({
          type: 'Alexa.ToggleController',
          toggleType: 'powerState',
          powerResult: 'OFF',
          token: token
        })
        .getResponse();
    } else if (powerResult === 'OFF') {
      // Turn the device on
      return handlerInput.responseBuilder
        .addDirective({
          type: 'Alexa.ToggleController',
          toggleType: 'powerState',
          powerResult: 'ON',
          token: token
        })
        .getResponse();
    } else {
      // Return an error if the powerResult is not recognized
      return handlerInput.responseBuilder
        .speak('Sorry, I could not toggle the device.')
        .getResponse();
    }
  }
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    ToggleIntentHandler
  )
  .lambda();
