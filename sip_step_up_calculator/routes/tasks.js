const express = require('express');
const tasks = require('../controller/tasks');
const router = express.Router();

router.get('/sipstepup', tasks.calculate);

module.exports = router;