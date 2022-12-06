const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/postgresql-polished-07183', { logging: false });

module.exports = db;


//do not touch!!!