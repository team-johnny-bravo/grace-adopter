const Sequelize = require('sequelize');
console.log(process.env.DATABASE_URL)
const db = new Sequelize('postgres://localhost:5432/grace-adopter' || process.env.DATABASE_URL);

module.exports = db;

//do not touch!!!