const _ = require("lodash");

module.exports = {
  sessions: (parent, args, { dataSources }, info) => {
    const allSessions = dataSources.sessionDataSource.getSessions(args);
    return allSessions;
  },
  sessionById: (parent, { id }, { dataSources }, info) => {
    const allSessions = dataSources.sessionDataSource.getSessionById(id);
    return allSessions;
  },
  speakers: async (parent, args, { dataSources }, info) => {
    const allSpeakers = await dataSources.speakerDataSource.getSpeakers(args);
    return allSpeakers;
  },
  speakerById: async (parent, { id }, { dataSources }, info) => {
    const speaker = await dataSources.speakerDataSource.getSpeakerById(id);
    return speaker;
  },
  users: async (parent, args, { user, dataSources }, info) => {
    const users = await dataSources.userDataSource.getUsers();
    return users;
  },
  userById: async (parent, { id }, { dataSources }, info) => {
    const user = await dataSources.userDataSource.getUserById(id);
    return user;
  },
  me: async (parent, { id }, { dataSources, user }, info) => {
    if (user) {
      return dataSources.userDataSource.getUserById(user.sub);
    }
    return undefined;
  },
};
