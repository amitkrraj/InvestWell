// actual calculation
const calculate = (data) => {
  let { monthlySavings, yearlyIncrement, investmentPeriod, rateOfReturn } = data;
  const months = investmentPeriod * 12;
  const rate = rateOfReturn / 12;
  let sipCumulation = 0;
  let sipGrowthResult = 0;

  for (let i = 1; i <= months; i++) {
    if (i != 1) {
      if (i % 12 == 1) {
        monthlySavings += yearlyIncrement;
      }
    }
    sipCumulation = monthlySavings * Math.pow(1 + rate / 100, i);
    sipGrowthResult += sipCumulation;
  }
  return sipGrowthResult;
};

module.exports = calculate;
