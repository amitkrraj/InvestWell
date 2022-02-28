const express = require('express')
const router = express.Router()
const sipCalculatorCtrl = require('../controllers/sipCalculator')
const marketDataCtrl = require('../controllers')

router.post('/sipCalculator', sipCalculatorCtrl.sipCalculator)
router.post('/sipStepUpCalculator', sipCalculatorCtrl.sipStepUpCalculator)
router.post('/sipDelayCalculator', sipCalculatorCtrl.sipDelayCalculator)

router.get('/getFunds', marketDataCtrl.getAmcName)
router.get('/getCategory', marketDataCtrl.getCategory)
router.get('/getschemesDetails', marketDataCtrl.getschemesDetails)

module.exports = router