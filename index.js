const getSecret = require("./services/awsSecretsManagerRetreiver");
const uploadFile = require("./uploadToS3");
require("dotenv").config();

async function handleUpload(APIKey) {
  try {
    console.log(APIKey)
    const secret = await getSecret(process.env.SECRETS_KEY);

    if (secret.APIKey === APIKey) {
      const localFilePath = "hello.txt";
      const s3Key = "TestFile"; // Change this to your desired S3 key
      const s3Location = await uploadFile(localFilePath, s3Key);

      return {
        success: true,
        message: "File uploaded successfully.",
        s3Location,
      };
    } else {
      return { success: false, message: "Unauthorized: Invalid API key." };
    }
  } catch (error) {
    console.error("Error:", error.message);
    return { success: false, message: "Internal Server Error." };
  }
}

module.exports = { handleUpload };
