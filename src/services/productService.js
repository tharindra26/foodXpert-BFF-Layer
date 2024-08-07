const axios = require('axios');

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;

// Create a product
const createProduct = async (product) => {
    try {
        const response = await axios.post(`${PRODUCT_SERVICE_URL}/api/v1/products`, product);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

// Get all products
const getAllProducts = async () => {
    try {
        const response = await axios.get(`${PRODUCT_SERVICE_URL}/api/v1/products`,);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

// Get product by ID
const getProductById = async (id) => {
    try {
        const response = await axios.get(`${PRODUCT_SERVICE_URL}/api/v1/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

// Update product
const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${PRODUCT_SERVICE_URL}/api/v1/products/${id}`, product);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

// Delete product
const deleteProduct = async (id) => {
    try {
        await axios.delete(`${PRODUCT_SERVICE_URL}/api/v1/products/${id}`);
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

// Check product availability
const checkProductAvailability = async (productId) => {
    try {
        const response = await axios.get(`${PRODUCT_SERVICE_URL}/api/v1/products/${productId}/availability`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    checkProductAvailability,
};

