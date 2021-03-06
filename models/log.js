const assert = require("assert");

const Log = function(args) {
  assert.ok(args.subject && args.entry && args.userId, "Need subject, entry, and userId");
  let log = {};
  log.subject = args.subject;
  log.entry = args.entry;
  log.createdAt = new Date();
  log.userId = args.userId;

  return log;
};

module.exports = Log;