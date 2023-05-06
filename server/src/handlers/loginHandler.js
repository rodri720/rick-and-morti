const { User } = require("../DB_connection");

const loginHandler = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  return user;
};

module.exports = loginHandler;
