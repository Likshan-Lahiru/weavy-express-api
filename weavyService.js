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
    return await weavy.post('/users/create/', data);
};


const getUsers = async () => {
    return await weavy.get('users/getAllUsers');
};


const getUserById = async (id) => {
    return await weavy.get(`users/getUserById/${id}`);
};


const updateUser = async (id, data) => {
    return await weavy.patch(`users/update/${id}`, data);
};


const deleteUser = async (id) => {
    return await weavy.delete(`users/delete/${id}`);
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};
