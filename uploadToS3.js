const fs = require("fs");
const s3 = require("./services/s3Connector");

const bucketName = process.env.S3_BUCKET_NAME;

async function uploadFile(localFilePath, s3Key) {
  const fileContent = fs.readFileSync(localFilePath);

  const s3UploadParams = {
    Bucket: bucketName,
    Key: s3Key,
    Body: fileContent,
  };

  return new Promise((resolve, reject) => {
    s3.upload(s3UploadParams, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Location);
      }
    });
  });
}

module.exports = uploadFile;
