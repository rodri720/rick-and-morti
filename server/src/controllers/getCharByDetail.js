//const axios = require("axios")
const uno = new Promise((resolve, reject)=>setTimeout(() => {
    resolve(1)
}, 1000));
const dos = new Promise((resolve, reject) => resolve(2));

/* const promesa1 = function (id) {
  console.log("voy a ejecutar una promesa");
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json());
};
console.log("promises"); */
const promesa = Promise.all([uno, dos]).then((values) => {
  values.forEach((value) => {
    console.log(value);
  });
});

console.log(promesa)
