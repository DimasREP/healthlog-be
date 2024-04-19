'use strict'
const express = require('express')
const usersController = require('../controllers/userController')

const router = express.Router()

router.get(`/api/v1/user`, usersController.index)
// router.post(`/api/v1/user`, usersController.store)
// router.get(`/api/v1/user/:id`,usersController.show)
// router.put(`/api/v1/user/:id`,usersController.update)
router.delete(`/api/v1/user/:id`, usersController.destroy)

module.exports = router
