const { sipStepUpCalculator } = require("../controller/tasks");
const express = require("express");
const router = express.Router();

router.post("/sipStepUpCalculator", sipStepUpCalculator);

module.exports = { router };
