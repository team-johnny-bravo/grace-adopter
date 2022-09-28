const Sequelize = require('sequelize');
const db = require('./database');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
// const config = {
//     logging: false,
// };
  
// if (process.env.LOGGING) {
// delete config.logging;
// }

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

User.prototype.generateToken = async function () {
    try {
      const token = await jwt.sign({ id: this.id }, process.env.JWT);
      return { token };
    } catch (err) {
      console.error(err);
    }
};
User.byToken = async function (token) {
    try {
      const payload = await jwt.verify(token, process.env.JWT);
    //   console.log('payload:', payload)
      if (payload) {
        //find user by payload which contains the user id
        const user = await User.findByPk(payload.id);
        return user;
      }
      const error = Error("bad credentials");
      error.status = 401;
      throw error;
    } catch (ex) {
      const error = Error("bad credentials");
      error.status = 401;
      throw error;
    }
};
User.authenticate = async ({ userName, password }) => {
    const user = await User.findOne({
      where: {
        userName,
      },
    });
    if (!user) {
        const error = Error("could not find user");
        error.status = 401;
        throw error;
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return user;
    }
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
};

User.addHook('beforeCreate', async(user)=> {
    if(user.changed('password')){
      user.password = await bcrypt.hash(user.password, 10);
    }
});

User.addHook('beforeUpdate', async(user)=> {
    if(user.changed('password')){
      user.password = await bcrypt.hash(user.password, 10);
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