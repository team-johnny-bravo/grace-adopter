const Sequelize = require('sequelize');
const db = require('./database');
const User = db.define('user',{
    userName:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
        validate:{
            notEmpty:true
        }
    },
    password:{
        type:Sequelize.STRING,
        validate:{
            notEmpty:true
        }
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
        validate:{
            notEmpty:true
        }
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    address:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    yearsOfExperience:{
        type:Sequelize.INTEGER,
        validate:{
            notEmpty:true
        }
    },
    isAdmin:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    }
});

//create authentication



User.prototype.getCart = async function(){
    
}

User.prototype.addToCart = async function(){
//    grab the order associated with the user
//    orders are your cart
}

User.prototype.removeFromCart = async function(){

}

//coverting order model from cart to actual placed order
User.prototype.createOrder = async function(){

}
module.exports = User;