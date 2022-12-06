const router = require('express').Router();
const {User} = require('../db')
const {Order} =require('../db')
const JWT = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const { check, validationResult } = require("express-validator");

const requireToken = async (req, res, next) => {
    try {
    const token = req.headers.authorization;
    //   const token = window.localStorage.getItem('token')
    //  console.log('This is req.headers:', req.headers)
    console.log('This is token:', token)
      if(!token){
        const error = Error("No token found!!!");
        error.status = 401;
        throw error;
      }
      const user = await User.byToken(token);
      req.user = user;
      next();
    } catch(error) {
      next(error);
    }
};

// GET /api/users
router.get('/', requireToken, async (req,res, next)=>{
// router.get('/',  async (req,res, next)=>{
    try {
        if (req.user.isAdmin) {
            const users = await User.findAll()
            res.send(users)
            
        }
    } catch (error) {
        next(error)
    }
})

// GET /api/users/:id
router.get('/:id', async(req,res,next)=>{
    try {
        const user = await User.findByPk(req.params.id,{include:Order})
        res.send(user)
    } catch (error) {
        next(error)
    }
})

// GET /api/users/:id/orders


//POST /api/users
router.post('/', async(req,res,next)=>{
    try {
        const user = await User.create(req.body)
        res.status(201).send(user)
    } catch (error) {
        next(error)
    }
})

//DELETE /api/users/:id
router.delete('/:id', async(req,res,next)=>{
    try {
        const user = await User.findByPk(req.params.id)
        await user.destroy()
        res.send(user)
    } catch (error) {
        next(error)
    }
})

//PUT /api/users/:id
router.put('/:id', async(req,res,next)=>{
    try {
        const user = await User.findByPk(req.params.id);
        user.update(req.body)
        res.send(user)
    } catch (error) {
        next(error)
    }
})

// SIGNUP /api/users/signup
router.post('/signup',  [
    check("email", "Please input a valid email")
        .isEmail(),
    check("password", "Please input a password with a min length of 6")
        .isLength({min: 6})
], async(req,res)=>{
    const { email, password, userName, firstName, lastName, address, yearsOfExperience } = req.body;
    
    // Validate the inputs 
    const errors = validationResult(req);

    if(!errors.isEmpty()){
    // if(errors.length){ ???
        return res.status(400).json({
            errors: errors.array()
        })
    }

    // Validate if the user doesnt already exist;
    const user = await User.findOne({
        where:{
            email:email
        }
    })
    if(user) {
        return res.status(400).json({
            errors: [
                {
                    msg: "This user already exists",
                }
            ]
        })
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Save the password into the db
    const newUser = await User.create({
        email,
        // password: hashedPassword,
        password,
        userName,
        firstName,
        lastName,
        address,
        yearsOfExperience
    });
    await newUser.save()

    const token = await JWT.sign({ email }, process.env.JWT);
    
    res.json({
        token
    })
})

//SIGNIN  /api/users/auth/signin
router.post("/auth/signin", async (req, res, next) => {
    try {
      const user = await User.authenticate(req.body);
      if(!user) res.sendStatus(404);
      const token = await user.generateToken();
      res.send(token); 
    } catch (ex) {
      next(ex);
    }
});

//    /api/users/auth/signin
router.get('/auth/signin', requireToken, async(req, res, next) => {
    if(req.user) {
      res.send(req.user);
    } else {
      res.sendStatus(404);
    }
});


module.exports = router