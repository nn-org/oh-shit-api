## oShit API
This API is built on top of Amazon Web Services
It's meant to receive victim data via SQS and fetch as much data on the victim as possible from other APIs
It records the data on an AWS DynamoDB
The data should be available on a GraphQL server

#### Reference material
AWS SQS from https://github.com/andrewpuch/aws-sqs-node-js-examples/blob/master/app.js