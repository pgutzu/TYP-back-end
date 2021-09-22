const express = require('express')
const router = express.Router()
const usersRoutes = require('./usersRoutes.js')
const studentRoutes = require('./studentRoutes.js')

router.use('/users', usersRoutes )
router.use('/students', studentRoutes)

module.exports = router;