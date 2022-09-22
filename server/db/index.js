const db = require('./database')
const Pet = require('./pet')
const Order = require('./order')
const User = require('./user')
const Product = require('./product')

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(Pet)
Pet.belongsTo(User)

// Order.hasMany(Product)
// Product.belongsTo(Order)
Product.belongsToMany(Order, {through:'product-order'})
Order.belongsToMany(Product,{through:'product-order'})

// LineItem.belongsTo(Product)
//Luke's
// Order.hasMany(LineItem)

module.exports ={
    db, 
    Order,
    Pet,
    User,
    Product
}

