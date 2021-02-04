const Query = require("./query");
const Mutation = require("./mutation");
const Session = require("./sessions");
const Speaker = require("./speakers");
const User = require("./users");
const resolvers = { Query, Mutation, Session, Speaker, User };

module.exports = resolvers;
