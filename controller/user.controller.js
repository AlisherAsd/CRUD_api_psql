const db = require('../db')

const UserController = {
    async create_user(req, res) {
        const name = req.body.name
        const surname = req.body.surname
        const newPerson = await db.query('INSERT INTO person (name, surname) values ($1, $2) RETURNING *', [name, surname])
        console.log(name, surname)
        res.send(newPerson.rows)
    },
    async get_users(req, res) {
        const allUsers = await db.query('SELECT * FROM person')
        res.send(allUsers.rows)
    },
    async get_user(req, res) {
        const ID = req.params.id
        const user = await db.query('SELECT * FROM person WHERE id = $1', [ID])
        res.send(user.rows)
    },
    async update_user(req, res) {
        const ID = req.params.id
        const name = req.body.name
        const surname = req.body.surname
        const updateUser = await db.query(
            'UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *',
            [name, surname, ID]
        )
        res.send(updateUser.rows)
    },
    async delete_user(req, res) {
        const ID = req.params.id
        const result = await db.query('DELETE FROM person WHERE id = $1', [ID])
        res.send(result.rows)
    },
}

module.exports =  UserController