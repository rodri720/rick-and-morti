const getAllHandlers = require("../handlers/getAllFavorites");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ message: "Faltan datos" });
    }

    await deleteFavHandler(id);

    const allFavorites = await getAllHandlers();

    if (!allFavorites) res.status(200).json({ message: "No hay favoritos" });
    res.status(200).json(allFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
