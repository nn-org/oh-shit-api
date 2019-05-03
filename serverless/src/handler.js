const log = require("./log");
const addVictimToQueue = require("./add-victim-to-queue");
const dynamoWriteVictim = require("./dynamo-write-victim");

module.exports = {
  log,
  addVictimToQueue,
  dynamoWriteVictim,
}
