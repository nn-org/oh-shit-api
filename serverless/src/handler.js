const log = require("./log");
const addVictimToQueue = require("./add-victim-to-queue");
const dynamoWriteVictims = require("./dynamo-write-victims");
const dynamoScanVictims = require("./dynamo-scan-victims");

module.exports = {
  log,
  addVictimToQueue,
  dynamoWriteVictims,
  dynamoScanVictims,
}
