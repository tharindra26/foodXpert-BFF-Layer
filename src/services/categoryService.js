const axios = require('axios');

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;

const addCategory = async (category) => {
    try {
        const response = await axios.post(`${PRODUCT_SERVICE_URL}/api/v1/categories`, category);
        return response.data;
    } catch (error) {
        throw new Error('Error adding category');
    }
}

module.exports = {
    addCategory
};