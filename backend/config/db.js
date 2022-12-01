require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("CONNECT DB SUCCESSFUL");
    } catch (error) {
        console.log("CONNECT DB FAIL");
        process.exit(1);
    }
}

module.exports = connectDB;