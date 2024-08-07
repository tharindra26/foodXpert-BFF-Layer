const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mount routes
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/products', productRoutes);

module.exports = app;
