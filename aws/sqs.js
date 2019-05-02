const aws = require('aws-sdk');
const region = "eu-west-1";

const credentials = new aws.SharedIniFileCredentials({profile: 'default'});

aws.config.credentials = credentials;
aws.config.region = region;
const sqs = new aws.SQS();

// adds a message to the queue
const sendMessage = (params, cb) => {
  sqs.sendMessage(params, (err, data) => {
    cb(err ? err : data);
  });
};

// receives a message from the queue
const receiveMessage = (params, cb) => {
  sqs.receiveMessage(params, (err, data) => {
    cb(err ? err : data);
  });
}

// Purging the entire queue
const purgeQueue = (params, cb) => {
  // const params = { QueueUrl: queueUrl };
  sqs.purgeQueue(params, (err, data) => {
    cb(err ? err : data);
  });
}

module.exports = {
  sendMessage,
  receiveMessage,
  purgeQueue,
}
