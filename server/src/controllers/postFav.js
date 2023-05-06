const getAllHandlers = require("../handlers/getAllFavorites");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (!name || !gender || !species || !origin || !image || !status) {
      return res.status(401).json({ message: "Faltan datos" });
    }

    await postFavHandler({ ...req.body });

    const allFavorites = await getAllHandlers();

    if (!allFavorites) res.status(200).json({ message: "No hay favoritos" });
    res.status(200).json(allFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
