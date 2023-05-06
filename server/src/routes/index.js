// Con Sequelize
const express = require("express");
const {
  getCharById,
  login,
  postFav,
  deleteFav,
  postUser
} = require("../controllers/index");
const router = express.Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.post("/login", postUser );

module.exports = router;




// Sin sequelize
/* const express = require("express");
const {
  getCharById,
  login,
  postFav,
  deleteFav,
} = require("../controllers/index");
const router = express.Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router; */
