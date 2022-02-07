const calculate = require("../services/tasks");

const calculateStepUpSip = (req, res) => {
  const { monthlySavings, yearlyIncrement, investmentPeriod, rateOfReturn } = req.body;
  if (
      !monthlySavings ||
      monthlySavings <= 0 ||
      !yearlyIncrement ||
      yearlyIncrement <= 0 ||
      !investmentPeriod ||
      investmentPeriod <= 0 ||
      !rateOfReturn ||
      rateOfReturn <= 0
  ) {
      res.status(400).send({ error: "Invalid Input" });
  } else res.send({ result: calculate(req.body) });
};

module.exports = calculateStepUpSip;
