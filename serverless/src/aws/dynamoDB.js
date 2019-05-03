const AWS = require('aws-sdk');
const region = "eu-west-1";
AWS.config.update({region});

const dynamodb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const batchWrite = async items => {
  const table = items.map( item => (
    {
      PutRequest: {
        Item: {
          phoneNumber: item.phoneNumber,
          victim: item,
        },
      },
    })
  );

  const params = {
    RequestItems: {
      victims: table,
    },
  };

  const res = await dynamodb.batchWrite(params).promise();
  return res;
}

module.exports = {
  batchWrite,
}
