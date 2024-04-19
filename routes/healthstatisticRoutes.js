'use strict'
const express = require('express')
const HealthStatistic = require('../controllers/healthstatisticController')
// const { verifyToken } = require('../middleware/verify')
const router = express.Router()

router.get(`/api/v1/HealthStatistic`,  HealthStatistic.index)
router.post(`/api/v1/HealthStatistic`, HealthStatistic.store)
router.get(`/api/v1/HealthStatistic/:id`,  HealthStatistic.show)
router.put(`/api/v1/HealthStatistic/:id`, HealthStatistic.update)
router.delete(`/api/v1/HealthStatistic/:id`, HealthStatistic.destroy)

module.exports = router