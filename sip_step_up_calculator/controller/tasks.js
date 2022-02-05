const req = require('express/lib/request');
const res = require('express/lib/response');
const tasks = require('../services/tasks');

const calculate = (req, res) => {
    let data = req.query;
    if(data.months || data.rate < 0) res.send('Invalid Input');
    else tasks.calculate(data);
    res.send('Task Competed');
}

module.exports = calculate;