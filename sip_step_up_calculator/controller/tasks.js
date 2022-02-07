const calculateSip = require("../services/tasks");

const sipStepUpCalculator = (req, res) => {
    const data = req.body;
    if (
        !data.monthlySavings ||
        data.monthlySavings <= 0 ||
        !data.yearlyIncrement ||
        data.yearlyIncrement <= 0 ||
        !data.investmentPeriod ||
        data.investmentPeriod <= 0 ||
        !data.rateOfReturn ||
        data.rateOfReturn <= 0
    )
        res.status(400).send({ error: "Invalid Input" });
    else res.send(calculateSip(data));
};

module.exports = sipStepUpCalculator;
