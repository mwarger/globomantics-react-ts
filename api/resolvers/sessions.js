const _ = require("lodash");

module.exports = {
  async speakers(session, args, { dataSources }) {
    const speakers = await dataSources.speakerDataSource.getSpeakers(args);

    const returns = speakers.filter((speaker) => {
      return _.filter(session.speakers, { id: speaker.id }).length > 0;
    });

    return returns;
  },
};
