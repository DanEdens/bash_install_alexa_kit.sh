const deviceMap = {
    'hb3910': 'device-token-for-hb3910'
};

function toggleIntentHandler(handlerInput) {
    if (handlerInput.requestEnvelope.request.type !== 'IntentRequest') {
        return handlerInput.responseBuilder.getResponse();
    }

    const request = handlerInput.requestEnvelope.request;
    const deviceName = request.token;
    const powerResult = request.status.powerResult;

    if (request.intent.name !== TOGGLE_INTENT) {
        return handlerInput.responseBuilder.getResponse();
    }

    // Look up the device token using the device name
    const deviceToken = deviceMap[deviceName];
    if (!deviceToken) {
        return handlerInput.responseBuilder
            .speak(`Sorry, I could not find a device with the name ${deviceName}.`)
            .getResponse();
    }

    if (powerResult === 'ON') {
        // Turn the device off
        return handlerInput.responseBuilder
            .addDirective({
                type: 'Alexa.ToggleController',
                toggleType: 'powerState',
                powerResult: 'OFF',
                token: deviceToken
            })
            .getResponse();
    } else if (powerResult === 'OFF') {
        // Turn the device on
        return handlerInput.responseBuilder
            .addDirective({
                type: 'Alexa.ToggleController',
                toggleType: 'powerState',
                powerResult: 'ON',
                token: deviceToken
            })
            .getResponse();
    } else {
        // Return an error if the powerResult is not recognized
        return handlerInput.responseBuilder
            .speak('Sorry, I could not toggle the device.')
            .getResponse();
    }
}