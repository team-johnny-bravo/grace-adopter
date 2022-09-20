const router = require('express').Router();
const {User} = require('../db')
const {Order} =require('../db')


// GET /api/users
router.get('/', async (req,res, next)=>{
    try {
        const users = await User.findAll()
        res.send(users)
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

module.exports = router