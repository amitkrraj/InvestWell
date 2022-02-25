const express = require('express')
const router = express.Router()
const sipCalculatorCtrl = require('../controllers/sipCalculator')
const marketDataCtrl = require('../controllers/index')

router.post('/sipCalculator', sipCalculatorCtrl.sipCalculator)
router.post('/sipStepUpCalculator', sipCalculatorCtrl.sipStepUpCalculator)
router.post('/sipDelayCalculator', sipCalculatorCtrl.sipDelayCalculator)

router.get('/getCategory', marketDataCtrl.getCategory)

module.exports = router