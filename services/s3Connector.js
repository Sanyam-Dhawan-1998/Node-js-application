const AWS = require("aws-sdk");
require("dotenv").config();

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

AWS.config.credentials = new AWS.Credentials({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

AWS.config.update({ region: region });

const s3 = new AWS.S3();

module.exports = s3;
