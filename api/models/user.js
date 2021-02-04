const { getUserById } = require("../datasources/users");

const generateUserModel = ({ user }) => {
  return {
    getById: (id) => {
      if (user) {
        if (user.role === "ADMIN") {
          return getUserById(id);
        }
        if (user.role === "USER") {
          return getUserById(user.sub);
        }
      }
      return null;
    },
  };
};

module.exports = { generateUserModel };
