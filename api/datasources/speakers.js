const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const { groupBy } = require("lodash");

const adapter = new FileSync("./data/speakers.json");
const db = low(adapter);
db._.mixin(lodashId);

class SpeakerDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db;
  }

  async getSpeakerById(id) {
    return this.db.get("speakers").getById(id).value();
  }

  async getSpeakers(args) {
    const data = this.db.get("speakers").filter(args).value();
    return data;
  }

  createSpeaker(user) {
    return this.db.get("speakers").insert({ userId: user.id }).write();
  }

  getSpeakerByUserId(userId) {
    return this.db.get("speakers").find({ userId }).value();
  }

  markFeatured(speakerId, featured) {
    return this.db
      .get("speakers")
      .find({ id: speakerId })
      .assign({ featured })
      .write();
  }
}

module.exports = SpeakerDataSource;
