const sqs = require("./aws/sqs");
const QueueUrl = process.env.QUEUE_URL;

module.exports = async (event) => {
  const { body } = event;
  console.log({body});

  const params = {
    MessageBody: body,
    QueueUrl,
    DelaySeconds: 0
  };

  try {
    const res = await sqs.sendMessage(params);
    console.log({res});
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'processed content successfully',
        input: event,
      }, null, 2),
    };
  } catch(err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'failed to post data to SQS',
        input: event,
      }, null, 2),
    };
  }
}