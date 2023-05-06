// Este es con sequelize
const loginHanlder = require("../handlers/loginHandler");
const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (email === "" || password === "")
      res.status(400).json({ message: "Faltan datos" });

    const user = await loginHanlder(email);

    if (!user) res.status(404).json({ message: "Usuario no encontrado" });

    if (password !== user.password)
      res.status(403).json({ message: "Contraseña incorrecta" });

    res.status(200).json({ access: true });
  } catch (error) {
     
    res.status(500).json({ error: error.message });

  }
};

module.exports = login;

// Este comentado es antes de sequelize

/* const users = require("../utils/users");
const login = (req, res) => {
  const { email, password } = req.query;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.exports = login; */
