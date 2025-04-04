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
    return await weavy.post('/api/users', data);
};

const getUsers = async () => {
    return await weavy.get('/api/users');
};

const getUserById = async (id) => {
    return await weavy.get(`/api/users/${id}`);
};

const updateUser = async (id, data) => {
    return await weavy.put(`/api/users/${id}`, data);
};

const deleteUser = async (id) => {
    return await weavy.delete(`/api/users/${id}`);
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};