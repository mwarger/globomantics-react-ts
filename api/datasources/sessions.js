const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./data/sessions.json");
const db = low(adapter);
db._.mixin(lodashId);

class SessionDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.get("sessions");
  }

  getSessions(args) {
    return this.db.filter(args).value();
  }

  getSessionById(id) {
    return this.db.getById(id).value();
  }

  createSession(session) {
    return this.db.insert(session).write();
  }
}

module.exports = SessionDataSource;
