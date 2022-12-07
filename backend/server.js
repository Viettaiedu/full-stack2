require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoute = require('./routes/productRoute');
connectDB();
const app = express();

app.use(express.json());
app.use('/api/products', productRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT , () => console.log(`Server running localhost:${PORT}`));