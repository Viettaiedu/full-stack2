require('dotenv').config();
const Product = require('../models/ProductModel');


// [GET] /api/products
const getProductAll = async (req,res) => {
    try {
       const product = await Product.find({});
       res.json(product)
    }catch(error) {
        console.log("Get product failed");
        process.exit(1);
    }
}

// [GET] /api/products/:id
const getProductById = async (req,res) => {
    try {
       const product = await Product.findById({});
       res.json(product)
    }catch(error) {
        console.log("Get product failed");
        process.exit(1);
    }
}

module.exports = {
    getProductAll,
    getProductById
}