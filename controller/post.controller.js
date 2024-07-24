const db = require('../db')

const PostController = {
    async create_post(req, res) {
        const title = req.body.title
        const content = req.body.content
        const ID = +req.body.user_id
        const newPost = await db.query(
            'INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *', 
            [title, content, ID]
        )
        res.send(newPost.rows)
    },
    async get_post(req, res) {
        const ID = +req.query.id
        if (ID) {

            const posts = await db.query(
                'SELECT * FROM post WHERE user_id = $1', 
                [ID]
            )
            res.send(posts.rows)
        } else {
          
            const allPosts = await db.query('SELECT * FROM post')
            res.send(allPosts.rows)
        }
    },
    async update_post(req, res) {
        const ID = req.query.id
        const title = req.body.title
        const content = req.body.content
        const updatePost = await db.query(
            'UPDATE post SET title = $1, content = $2 WHERE id = $3 RETURNING *',
            [title, content, ID]
        ) 
        res.send(updatePost.rows)
    },
    async delete_post(req, res) {
        const ID = req.query.id
        const result = await db.query('DELETE FROM post WHERE id = $1', [ID])
        res.send(result.rows)
    }

  
}

module.exports = PostController