const express = require('express')
const router = express.Router()

const db = require('../database/db')

router.post('/storeEvent', async (req, res) => {
    let result = await db.dbCreate('form', {
        name: req.body.name, surname: req.body.surname, email: req.body.email, date: req.body.date })
    res.json(result)
})

module.exports = router