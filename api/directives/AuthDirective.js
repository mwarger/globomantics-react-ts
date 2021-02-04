const {
  SchemaDirectiveVisitor,
  AuthenticationError,
} = require("apollo-server-express");

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field, details) {
    const { resolve } = field;
    field.resolve = async function (...args) {
      const context = args[2];
      const user = context.user;
      if (user.role !== "ADMIN") {
        throw new AuthenticationError("You must be an admin.");
      }

      return resolve.apply(this, args);
    };
  }
}
exports.AuthDirective = AuthDirective;
