const Sequelize = require('sequelize');
console.log(process.env.DATABASE_URL)
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/grace-adopter');

module.exports = db;

//do not touch!!!