const { Favorite } = require("../DB_connection");

const deleteFavHandler = async ({
  id
}) => {
  await Favorite.destroy({
    where: { id },
  });
};

module.exports = deleteFavHandler;
