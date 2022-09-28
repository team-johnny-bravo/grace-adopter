const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/postgresql-pointy-12358' || process.env.DATABASE_URL);

module.exports = db;

//do not touch!!!