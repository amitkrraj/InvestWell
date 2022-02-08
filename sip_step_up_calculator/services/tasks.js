const calculateSipStepUp = inputData => {
    const { monthlySavings, yearlyIncrement, investmentPeriod, rateOfReturn } = inputData;
    const months = investmentPeriod * 12;
    const rate = rateOfReturn / 12;

    let graph = [{ month: 0, sip: 0, sipStepUp: 0 }];
    let sipStepUpSavings = monthlySavings;
    let sipCumulation = 0;
    let sipStepUpCumulation = 0;

    for (let i = 1; i <= months; i++) {
        sipCumulation += monthlySavings * Math.pow(1 + rate / 100, i);

        if (i != 1) {
            if (i % 12 == 1) {
                sipStepUpSavings += yearlyIncrement;
            }
        }
        sipStepUpCumulation += sipStepUpSavings * Math.pow(1 + rate / 100, i);

        graph.push({
                month: i,
                sip: Math.floor(sipCumulation),
                sipStepUp: Math.floor(sipStepUpCumulation)
            });
    }

    const data = { monthlySavings,
         investmentPeriod ,
         yearlyIncrement ,
         totalSipStepUpAmount: Math.floor(sipStepUpCumulation) };
    return { data, graph };
};

module.exports = { calculateSipStepUp };
