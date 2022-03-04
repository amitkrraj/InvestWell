const express = require('express')
const router = express.Router()
const sipCalculatorCtrl = require('../controllers/sipCalculator')
const marketDataCtrl = require('../controllers')

router.post('/sipCalculator', sipCalculatorCtrl.sipCalculator)
router.post('/sipStepUpCalculator', sipCalculatorCtrl.sipStepUpCalculator)
router.post('/sipDelayCalculator', sipCalculatorCtrl.sipDelayCalculator)
router.get('/getFunds', marketDataCtrl.getFunds)
router.get('/getCategory', marketDataCtrl.getCategory)
router.get('/getScheme', marketDataCtrl.getScheme)
router.get('/getNavHistory', marketDataCtrl.getNavHistory)

module.exports = router