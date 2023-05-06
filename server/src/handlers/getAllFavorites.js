const { Favorites } = require("../DB_connection");

const getAllHandlers = async () => {
    const allFavorites = await Favorites.findAll()
    return allFavorites
};

module.exports = getAllHandlers
