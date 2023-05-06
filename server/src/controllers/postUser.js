const register = require("../handlers/register");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "" || password === "")
      res.status(400).json({ message: "Faltan datos" });
    const { user, created } = await register(email, password);
    if (!created) {
      res.status(409).json({ message: "El usuario ya existe" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
