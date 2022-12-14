const Sequelize = require('sequelize');
const db = require('./database');

const Product = db.define('product',{
    name:{
        type:Sequelize.STRING,
        validate:{
            notEmpty:true
        }
    },
    description:{
        type:Sequelize.TEXT
    },
    price:{
        type:Sequelize.FLOAT
    },
    quantity:{
        type:Sequelize.INTEGER
    },
    size:{
        type:Sequelize.STRING,
    }
});

module.exports = Product;
