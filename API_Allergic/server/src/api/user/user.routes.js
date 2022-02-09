const UserRoutes = require('express').Router()
const { isAuth } = require('../../middlewares/auth')
const { postNewUser, loginUser, logoutUser, getUser, patchUser } = require('./user.controller')

UserRoutes.post('/register', postNewUser)
UserRoutes.patch('/patch/:id', [isAuth], patchUser)
UserRoutes.post('/login', loginUser)
UserRoutes.post('/logout', [isAuth], logoutUser)
UserRoutes.get('/:id', [isAuth], getUser)

module.exports = UserRoutes