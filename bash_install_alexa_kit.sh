# https://developer.amazon.com/en-US/docs/alexa/smarthome/understand-the-smart-home-skill-api.html

# https://developer.amazon.com/en-US/docs/alexa/avs-device-sdk/endpoints.html

# https://developer.amazon.com/en-US/docs/alexa/smarthome/wwa-connection-options.html

# https://developer.amazon.com/en-US/alexa/alexa-skills-kit



# Usage $: sh bash_install_alexa_kit.sh
# Update the package manager
sudo yum update -y

# Install Node.js and npm
curl -sL https://rpm.nodesource.com/setup_12.x | sudo bash -
sudo yum install -y nodejs

# Install the AWS SDK for Node.js
npm install aws-sdk

# Install the Alexa Skills Kit SDK for Node.js
npm install ask-sdk



# Yes, you can trigger Alexa routines from your EC2 server using the Alexa Skills Kit (ASK) and the Alexa Skills Kit SDK for Node.js. The ASK is a collection of self-service APIs, tools, documentation, and code samples that makes it easier for you to build and host Alexa skills.

# To trigger an Alexa routine from your EC2 server, you will need to create a custom skill that sends a request to the Alexa Routines API to execute the desired routine. You can use the Alexa Skills Kit SDK for Node.js to build and host the skill, and the AWS SDK for Node.js to make requests to the Alexa Routines API from your EC2 server.

# Here is a high-level overview of the steps you can follow to trigger an Alexa routine from your EC2 server:

# Create an AWS account, if you don't have one already.

# Set up an EC2 instance running Amazon Linux or another supported Linux distribution.

# Install the AWS SDK for Node.js on the EC2 instance.

# Create an Alexa skill using the Alexa Skills Kit Developer Console.

# Use the Alexa Skills Kit SDK for Node.js to build and host the custom skill on your EC2 instance.

# Use the AWS SDK for Node.js to make a request to the Alexa Routines API to execute the desired routine.
