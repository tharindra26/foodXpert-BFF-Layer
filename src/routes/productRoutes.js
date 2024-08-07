const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

router.post('/', async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productService.createProduct(product);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const product = req.body;
        const updatedProduct = await productService.updateProduct(req.params.id, product);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await productService.deleteProduct(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/:productId/availability', async (req, res) => {
    try {
        const availability = await productService.checkProductAvailability(req.params.productId);
        res.json(availability);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
