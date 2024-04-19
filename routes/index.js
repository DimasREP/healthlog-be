'use strict'
const express = require('express')
const user = require("./userRoutes")
const HealthStatistic = require("./healthstatisticRoutes")
const router = express()

router.get(`/api/v1/`, (_req, res) => {
  res.json({
    "message": "Welcome to restfullapi"
  })
})
router.use(user)
router.use(HealthStatistic)
module.exports = router