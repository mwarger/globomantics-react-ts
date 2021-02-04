const _ = require("lodash");

module.exports = {
  async sessions(speaker, args, { dataSources }) {
    const sessions = await dataSources.sessionDataSource.getSessions();

    const returns = sessions.filter((session) => {
      return _.filter(speaker.sessions, { id: session.id }).length > 0;
    });

    return returns;
  },
  user(speaker, args, { dataSources }) {
    return dataSources.userDataSource.getUserById(speaker.userId);
  },
};
