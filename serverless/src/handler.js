const log = require("./log");
const addVictimToQueue = require("./add-victim-to-queue");
const dynamoWriteVictim = require("./dynamo-write-victim");
const dynamoScanVictims = require("./dynamo-scan-victims");

module.exports = {
  log,
  addVictimToQueue,
  dynamoWriteVictim,
  dynamoScanVictims,
}
