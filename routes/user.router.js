const Router = require('express')
const router = new Router()

const UserController = require('../controller/user.controller')

router.post('/users', UserController.create_user)
router.delete('/users/:id', UserController.delete_user)
router.get('/users/:id', UserController.get_user)
router.get('/users', UserController.get_users)
router.put('/users/:id', UserController.update_user)

module.exports = router
