const aws = require('aws-sdk');
const region = "eu-west-1";

const sqs = new aws.SQS({region});

// adds a message to the queue
const sendMessage = async (params) => {
    const res = await sqs.sendMessage(params).promise();
    return res;
};

// receives a message from the queue
const receiveMessage = async (params) => {
  const res = await sqs.receiveMessage(params).promise();
  return res;
}

// Purging the entire queue
const purgeQueue = async (params) => {
  // const params = { QueueUrl: queueUrl };
  const res = await sqs.purgeQueue(params).promise();
  return res;
}

module.exports = {
  sendMessage,
  receiveMessage,
  purgeQueue,
}
