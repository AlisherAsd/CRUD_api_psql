const Router = require('express')
const router = new Router()

const PostController = require('../controller/post.controller')

router.post('/posts', PostController.create_post)
router.get('/posts',  PostController.get_post)
router.put('/posts',  PostController.update_post)
router.delete('/posts',  PostController.delete_post)


module.exports = router
