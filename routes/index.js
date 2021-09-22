const express = require('express')
const router = express.Router()
const usersRoutes = require('./usersRoutes.js')
const studentRoutes = require('./studentRoutes.js')
const modulesRoutes = require('./modulesRoutes')

router.use('/users', usersRoutes )
router.use('/students', studentRoutes)
router.use('/modules', modulesRoutes)

module.exports = router;