const express = require('express')
const router = express.Router()
const marketDataCtrl = require('../controllers')

router.get('/getFund', marketDataCtrl.getFund)

module.exports = router