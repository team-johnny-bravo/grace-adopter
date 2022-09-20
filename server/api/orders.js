const router = require('express').Router();
const {Order} = require('../db')
// GET /api/orders
router.get('/', async (req,res,next)=>{
    try {
        const orders = await Order.findAll()
        res.send(orders)
    } catch (error) {
        next(error)
    }
})
// GET /api/orders/:id
router.get('/:id', async(req,res,next)=>{
    try {
        const order = await Order.findByPk(req.params.id)
        res.send(order)
    } catch (error) {
        next(error)
    }
})
//POST /api/orders
router.post('/', async(req,res,next)=>{
    try {
        const order = await Order.create(req.body)
        res.status(201).send(order)
    } catch (error) {
        next(error)
    }
})
//DELETE /api/orders/:id
router.delete('/:id', async(req,res,next)=>{
    try {
        const order = await Order.findByPk(req.params.id)
        await order.destroy()
        res.send(order)
    } catch (error) {
        next(error)
    }
})
//PUT /api/orders/:id
router.put('/:id', async(req,res,next)=>{
    try {
        const order = await Order.findByPk(req.params.id);
        order.update(req.body)
        res.send(order)
    } catch (error) {
        next(error)
    }
})
module.exports = router