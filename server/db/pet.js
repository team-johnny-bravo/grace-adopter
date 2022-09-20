const Sequelize = require('sequelize')
const db = require('./database')

const Pet = db.define('pet', {
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    age:{
        type: Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        defaultValue:'https://wishbonepetrescue.org/wp-content/uploads/sites/45/2014/10/Wishbone-Adopt-homepg-2.jpg'
    },
    description:{
        type: Sequelize.TEXT
    },
    favoriteToys:{
        type:Sequelize.STRING,
    },
    species:{
        type:Sequelize.STRING
    },
    collarSize:{
        type:Sequelize.STRING
    },
    // limit results??
    status:{
        type:Sequelize.ENUM(
            'adopted', 'pending', 'available'
        ),
        defaultValue: 'available'
    }
})

module.exports = Pet