require('dotenv').config();
const axios = require('axios');

const weavy = axios.create({
    baseURL: process.env.WEAVY_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.WEAVY_API_KEY}`,
        'Content-Type': 'application/json',
    },
});


const createUser = async (data) => {
    return await weavy.post('users', data);
};


const getUsers = async () => {
    return await weavy.get('users');
};


const getUserById = async (id) => {
    return await weavy.get(`users/${id}`);
};


const updateUser = async (id, data) => {
    return await weavy.patch(`users/${id}`, data);
};


const deleteUser = async (id) => {
    return await weavy.delete(`users/${id}`);
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};
