

    Usage $: sh bash_install_alexa_kit.sh

```
# Update the package manager
sudo yum update -y

# Install Node.js and npm
curl -sL https://rpm.nodesource.com/setup_12.x | sudo bash -
sudo yum install -y nodejs

# Install the AWS SDK for Node.js
npm install aws-sdk

# Install the Alexa Skills Kit SDK for Node.js
npm install ask-sdk

```

You can trigger Alexa routines from your EC2 server using the `Alexa Skills Kit (ASK)` and the `Alexa Skills Kit SDK` for `Node.js`. The `ASK` is a collection of self-service APIs, tools, documentation, and code samples that makes it easier for you to build and host Alexa skills.

To trigger an Alexa routine from your EC2 server, you will need to create a custom skill that sends a request to the `Alexa Routines API` to execute the desired routine. You can use the `Alexa Skills Kit SDK` for `Node.js` to build and host the skill, and the `AWS SDK for Node.js` to make requests to the `Alexa Routines API` from your EC2 server.

Here is a high-level overview of the steps you can follow to trigger an Alexa routine from your EC2 server:

Create an `AWS account`, if you don't have one already.

Set up an EC2 instance running `Amazon Linux` or another supported Linux distribution.

Install the `AWS SDK for Node.js` on the `EC2 instance`.

Create an Alexa skill using the `Alexa Skills Kit Developer Console`.

Use the `Alexa Skills Kit SDK` for `Node.js` to build and host the custom skill on your EC2 instance.

Use the `AWS SDK` for `Node.js` to make a request to the `Alexa Routines API` to execute the desired routine.

# Main.js

This script defines two custom intents: `ToggleIntent` and `DiscoverDevicesIntent`.

The `toggleIntentHandler` function handles the `ToggleIntent` intent and uses the `Alexa.ToggleController` interface to toggle a device on and off.

The discoverIntentHandler function handles the `DiscoverDevicesIntent` intent and uses the `Alexa.Discovery` interface to retrieve a list of devices that are connected to the user's account.

To use this script, you can call the handler function with the desired intent name as an argument. For example, to toggle a device, you can call the handler function with the `ToggleIntent` intent name:

```

handler({
  requestEnvelope: {
    request: {
      type: 'IntentRequest',
      intent: {
        name: TOGGLE_INTENT
      }
    }
  }
});

```

To retrieve a list of devices, you can call the handler function with the `DiscoverDevicesIntent` intent name:

```

handler({
  requestEnvelope: {
    request: {
      type: 'IntentRequest',
      intent: {
        name: DISCOVER_INTENT
      }
    }
  }
});

```

# toggle_device_slackbot.js

An example of how you can create a Slackbot that sends the handler function a `ToggleIntent` request when a user types a `/toggle` command followed by a device name:

    /toggle hb3910

This script uses the spread operator `(...)` to split the message text into an array,  
with the first element being the command and the rest being the body of the message.  

The body of the message is then joined back into a single string and used as the token.

To convert a device name like `hb3910` into a device token, you will need to store the mapping between device names and tokens in a database or configuration file.  
You can then look up the token for a given device name when you receive a request.

An example of how you might do this can be found in [toggle_intent_handler.js](toggle_intent_handler.js)


The `toggleIntentHandler` function looks up the device token using the device name and sends the `Alexa.ToggleController` directive with the correct token.  

If the device name is not found in the `deviceMap`, it returns an error message.



# Refrences
[Understand the Smart Home Skill Api](https://developer.amazon.com/en-US/docs/alexa/smarthome/understand-the-smart-home-skill-api.html)

[avs-device-sdk/endpoints](https://developer.amazon.com/en-US/docs/alexa/avs-device-sdk/endpoints.html)

[wwa-connection-options](https://developer.amazon.com/en-US/docs/alexa/smarthome/wwa-connection-options.html)

[Alexa-Skills-Kit](https://developer.amazon.com/en-US/alexa/alexa-skills-kit)