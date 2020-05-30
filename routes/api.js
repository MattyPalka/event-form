const express = require('express')
const router = express.Router()

const db = require('../database/db')

router.post('/storeEvent', async (req, res) => {
    res.send(`${req.body.test}`)
})

module.exports = router