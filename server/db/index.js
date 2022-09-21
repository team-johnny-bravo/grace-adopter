const db = require('./database')
const Pet = require('./pet')
const Order = require('./order')
const User = require('./user')
const Product = require('./product')

// const syncAndSeed = async()=>{
//     await db.sync({force:true})

//     await Promise.all(pets.map(pet => {
//         return Pet.create(pet);
//       }));

//     await Promise.all(products.map(product => {
//     return Product.create(product);
//     }));

//     await Promise.all(users.map(user => {
//     return User.create(user);
//     }));

//     await Promise.all(orders.map(order => {
//         return Order.create(order);
//     })); 

//     console.log('Seeding successful!')
// }


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

