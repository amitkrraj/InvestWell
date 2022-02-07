const express = require("express");
const sipStepUpCalculator = require("../controller/tasks");
const router = express.Router();

router.post("/sipStepUpCalculator", sipStepUpCalculator);

module.exports = router;
