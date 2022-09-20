const router = require('express').Router();

router.use('/pets', require('./pets'));
router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));


module.exports = router;