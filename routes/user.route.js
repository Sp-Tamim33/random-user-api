const express = require('express');
const { getAllUser, getRandomUser, saveUser, updateUser, bulkUpdateUser, deleteUser } = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/all', getAllUser)
userRouter.get('/random', getRandomUser)
userRouter.post('/save', saveUser)
userRouter.patch('/update', updateUser)
userRouter.patch('/bulk-update', bulkUpdateUser)
userRouter.delete('/delete', deleteUser)

module.exports = userRouter;