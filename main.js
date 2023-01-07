const Alexa = require('ask-sdk-core');

const TOGGLE_INTENT = 'ToggleIntent';
const DISCOVER_INTENT = 'DiscoverDevicesIntent';

const skillBuilder = Alexa.SkillBuilders.custom();

const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        toggleIntentHandler,
        discoverIntentHandler
    )
    .lambda();

function toggleIntentHandler(handlerInput) {
    if (handlerInput.requestEnvelope.request.type !== 'IntentRequest') {
        return handlerInput.responseBuilder.getResponse();
    }

    const request = handlerInput.requestEnvelope.request;
    const token = request.token;
    const powerResult = request.status.powerResult;

    if (request.intent.name !== TOGGLE_INTENT) {
        return handlerInput.responseBuilder.getResponse();
    }

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

function discoverIntentHandler(handlerInput) {
    if (handlerInput.requestEnvelope.request.type !== 'IntentRequest') {
        return handlerInput.responseBuilder.getResponse();
    }

    const request = handlerInput.requestEnvelope.request;

    if (request.intent.name !== DISCOVER_INTENT) {
        return handlerInput.responseBuilder.getResponse();
    }

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

exports.handler = handler;