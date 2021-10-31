import AWS = require("aws-sdk");
import { config } from "./config/config";

// Configure AWS
//const credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
const credentials = new AWS.Credentials({
  accessKeyId: config.aws_access_key,
  secretAccessKey: config.aws_secret,
});

AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  console.log('=====credentials.accessKeyId '+credentials.accessKeyId);
  console.log('=====credentials.secretAccessKey '+credentials.secretAccessKey);
  console.log('======config.aws_media_bucket '+config.aws_media_bucket) 


  return s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  console.log('=====credentials.accessKeyId '+credentials.accessKeyId);
  console.log('=====credentials.secretAccessKey '+credentials.secretAccessKey);
  console.log('======config.aws_media_bucket '+config.aws_media_bucket);
  console.log('======config.aws_region '+config.aws_region)  

  return s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    ContentType:'image/jpeg',
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
