require("dotenv").config();
const {PASSWORD} = process.env
const users = [{ email: "fmontoya@soyhenry.com", password: PASSWORD }];
module.exports = users;