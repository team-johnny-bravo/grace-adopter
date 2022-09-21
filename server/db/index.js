const db = require('./database')
const Pet = require('./pet')
const Order = require('./order')
const User = require('./user')
const Product = require('./product')

const pets =[{
    name: 'Cody',
    age: '5',   
    description:'This is a cute Puppy!',
    species: 'Dog'
},{
    name: 'Lucy',
    age: '3',   
    description:'This is a lovely Kitty!',
    species: 'Cat'
},{
    name: 'Moe',
    age: '8',   
    description:'This kitty is so friendly!',
    species: 'Cat'    
}]

const products =[{
    name: 'leash',
    price: 10.00,
    size: 'small',
    description: 'Only for puppy!'
},{
    name: 'treats',
    price: 5.00,
    description: 'Only for kitty!'    
},{
    name: 'toy',
    price: 15.00,
    description: 'Toys for all!'
}]

const users =[{
    userName:'aaronub',
    password:'123456',
    email:'wo-08@hotmail.com',
    firstName:'Aaron',
    lastName:'Wang',
    address:'Westbury, NY',
    yearsOfExperience: 5
},{
    userName:'dandan',
    password:'111111',
    email:'dandan@hotmail.com',
    firstName:'Dandan',
    lastName:'Li',
    address:'Greenwich, CT',
    yearsOfExperience: 2    
}]

const orders = [{
    isCart:true,
    items:['leash', 'treats']
},{
    isCart:false,
    items:['treats', 'toy']
}]


const syncAndSeed = async()=>{
    await db.sync({force:true})

    await Promise.all(pets.map(pet => {
        return Pet.create(pet);
      }));

    await Promise.all(products.map(product => {
    return Product.create(product);
    }));

    await Promise.all(users.map(user => {
    return User.create(user);
    }));

    await Promise.all(orders.map(order => {
        return Order.create(order);
    })); 

    console.log('Seeding successful!')
}


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
    syncAndSeed,
    Order,
    Pet,
    User,
    Product
}

