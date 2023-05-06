// EXPRESS
/* ¡Genial! Ahora has conectado tu servidor con tu Front-End y puedes interactuar con tu base de datos a través de tu aplicación web. Recuerda seguir practicando y aprendiendo para mejorar tus habilidades en desarrollo web. ¡Mucho éxito en tu camino! */
const PORT = 3001;
const server = require("./app");
const { conn } = require("./DB_connection");

conn
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server raised in port: " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// HTTP
/* const http = require("http");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.url);
    try {
      const { url } = req;
      if (url.includes("/rickandmorty/character")) {
        const id = url.split("/").at(-1);
        console.log(id)
        getCharById(res, id);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  })
  .listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  }); */
