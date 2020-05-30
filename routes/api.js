const express = require('express')
const router = express.Router()

const db = require('../database/db')

router.post('/storeEvent', async (req, res) => {
    res.json(req.body)
})

module.exports = router