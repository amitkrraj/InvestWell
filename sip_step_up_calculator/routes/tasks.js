const express = require("express");
const calculateStepUpSip = require("../controller/tasks");
const router = express.Router();

router.post("/calculate", calculateStepUpSip);

module.exports = router;
