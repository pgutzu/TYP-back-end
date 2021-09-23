const express = require('express')
const router = express.Router()
const usersRoutes = require('./usersRoutes.js')
const studentRoutes = require('./studentRoutes.js')
const modulesRoutes = require('./modulesRoutes')

const SNRoutes = require('./SNRoutes.js')

router.use('/users', usersRoutes )
router.use('/students', studentRoutes)
router.use('/modules', modulesRoutes)
router.use('/socialNetworks', SNRoutes)


module.exports = router;