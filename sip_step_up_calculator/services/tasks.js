// actual calculation
const calculate = data => {
    let { monthlySavings, yearlyIncrement, investmentPeriod, rateOfReturn } = data;
    const months = investmentPeriod * 12;
    const rate = rateOfReturn / 12;

    let sip = [0];
    let sipCumulation = 0;
    let j = 1;
    for (let i = 1; i <= months; i++) {
        sipCumulation += +monthlySavings * Math.pow(1 + rate / 100, i);
        if (i % 12 == 0) sip[j++] = Math.floor(sipCumulation);
    }

    let sipStepUp = [0];
    sipCumulation = 0;
    j = 1;
    for (let i = 1; i <= months; i++) {
        if (i != 1) {
            if (i % 12 == 1) {
                monthlySavings += yearlyIncrement;
            }
        }
        sipCumulation += monthlySavings * Math.pow(1 + rate / 100, i);
        if (i % 12 == 0) sipStepUp[j++] = Math.floor(sipCumulation);
    }

    return { sip: sip, sipStepUp: sipStepUp };
};

module.exports = calculate;
