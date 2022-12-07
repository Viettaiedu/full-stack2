const Product = require('./models/ProductModel');
const connectDB = require('./config/db');
const products = require('./data/products');

connectDB();
const importDataToMongoDB = async () => {
    try {
        await Product.deleteMany();
       await Product.insertMany(products);
        console.log("IMPORT DATA TO MONGODB SUCCESSFUL");
        process.exit();
    } catch (error) {
        console.log("IMPORT DATA TO MONGODB ERROR");
        process.exit(1);
    }
}

importDataToMongoDB();