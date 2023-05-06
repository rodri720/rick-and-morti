const { User } = require("../DB_connection");
const register = async (email, password) => {
  //
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { password },
  });
  return { user, created };
};

module.exports = register;
