const { Favorite } = require("../DB_connection");

const postFavHandler = async ({
  name,
  origin,
  status,
  image,
  species,
  gender,
}) => {
    await Favorite.create({
      where: { name, origin, status, image, species, gender },
    });
};

module.exports = postFavHandler;
