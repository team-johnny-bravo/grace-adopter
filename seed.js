// const {db, User, Pet, Product, Order} = require('./server/db')
const {db} = require('./server/db')
const User = require('./server/db/user')
const Pet = require('./server/db/pet')
const Product = require('./server/db/product')
const Order = require('./server/db/order')


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

const seed = async () => {
    try {
        await db.sync({force: true})

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

        console.log('Seeding success!')
        db.close()
    }
    catch (err) {
        console.error('Oh noes! Something went wrong!')
        console.error(err)
        db.close()
    }
}

seed();