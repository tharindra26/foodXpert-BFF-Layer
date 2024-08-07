const express = require('express');
const router = express.Router();
const categoryService = require('../services/categoryService');

//post category
router.post('/', async (req, res) => {
    try {
        const category = req.body;
        const newCategory = await categoryService.addCategory(category);
        res.json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;