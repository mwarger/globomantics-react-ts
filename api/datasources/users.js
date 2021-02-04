const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./data/users.json");
const db = low(adapter);
db._.mixin(lodashId);

const userDb = db.get("users");

function getUserById(id) {
  return userDb.getById(id).value();
}

class UserDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.get("users");
    this.model = config.context.models.User;
  }

  getUsers() {
    return this.db.value();
  }

  getUserById(id) {
    return this.model.getById(id);
  }

  createUser(user) {
    return this.db.insert(user).write();
  }

  getUserByEmail(email) {
    return this.db.find({ email }).value();
  }

  toggleFavoriteSession(sessionId, userId) {
    const favorites = this.db.getById(userId).get("favorites").value() || [];

    let set = [];
    if (favorites.includes(sessionId)) {
      // remove it
      set = [...favorites.filter((fav) => fav !== sessionId)];
    } else {
      // add it
      set = [...favorites, sessionId];
    }

    return this.db.getById(userId).assign({ favorites: set }).write();
  }
}

module.exports = { UserDataSource, getUserById };
