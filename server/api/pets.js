const router = require('express').Router();
const {Pet} = require('../db')


// GET /api/pets
router.get('/', async (req,res, next)=>{
    try {
        const pets = await Pet.findAll()
        res.send(pets)
    } catch (error) {
        next(error)
    }
})

// GET /api/pets/:id
router.get('/:id', async(req,res,next)=>{
    try {
        const pet = await Pet.findByPk(req.params.id)
        res.send(pet)
    } catch (error) {
        next(error)
    }
})

//POST /api/pets
router.post('/', async(req,res,next)=>{
    try {
        const pet = await Pet.create(req.body)
        res.status(201).send(pet)
    } catch (error) {
        next(error)
    }
})

//DELETE /api/pets/:id
router.delete('/:id', async(req,res,next)=>{
    try {
        const pet = await Pet.findByPk(req.params.id)
        await pet.destroy()
        res.send(pet)
    } catch (error) {
        next(error)
    }
})

//PUT /api/pets/:id
router.put('/:id', async(req,res,next)=>{
    try {
        const pet = await Pet.findByPk(req.params.id);
        pet.update(req.body)
        res.send(pet)
    } catch (error) {
        next(error)
    }
})

module.exports = router