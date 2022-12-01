
const express = require('express');
const router = express.Router();
const { getProductAll,getProductById} = require('../controller/productController');

router.get('/',getProductAll);
router.get('/:id',getProductById);

module.exports = router;