const { batchWrite } = require("./aws/dynamoDB");

module.exports = async(event) => {
  const victims = event.Records
    .map( record => (JSON.parse(record.body)) );
  
  try {
    const response = await batchWrite(victims);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'processed content successfully',
        input: event,
        response,
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