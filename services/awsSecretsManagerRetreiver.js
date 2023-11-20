const AWS = require("aws-sdk");
require("dotenv").config();

const region = process.env.AWS_REGION;
AWS.config.update({ region: region });

const secretsManager = new AWS.SecretsManager();

async function getSecret(keyName) {
  const params = {
    SecretId: keyName,
  };

  try {
    const data = await secretsManager.getSecretValue(params).promise();
    return JSON.parse(data.SecretString);
  } catch (error) {
    console.error("Error retrieving secret from Secrets Manager:", error);
    throw error;
  }
}

module.exports = getSecret;
