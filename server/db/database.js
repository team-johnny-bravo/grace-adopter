const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/postgresql-pointy-12358', { logging: false });

module.exports = db;

//do not touch!!!