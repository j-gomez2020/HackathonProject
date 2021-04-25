housePrice = 400000;
interestRate = 3.25;
monthlyInterestRate = interestRate/12;
paymentYears = 30
monthlyHoa = 500
monthlyInsurance = 200
downPayment = 200000
totalMortgage = housePrice - downPayment
fixedMonthlyMortgagePayment = 
(totalMortgage * (monthlyInterestRate*(1+monthlyInterestRate)^(paymentYears*12)))/
    ((1+monthlyInterestRate)^(paymentYears*12))
const calculateMonthlyPayment = (fixedMonthlyMortgagePayment, housePrice,
     monthlyHoa, monthlyInsurance) => {fixedMonthlyMortgagePayment
         + ((housePrice)*1.2/12) + monthlyHoa + monthlyInsurance}

calculateMonthlyPayment = (fixedMonthlyMortgagePayment, housePrice,
            monthlyHoa, monthlyInsurance);

monthlyCurrentRent = 25000;
yearStay = 5;
inflationRate = 1.04;

const newRentPrice = (monthlyCurrentRent, 
    inflationRate, yearStay) => {monthlyCurrentRent*(1+inflationRate)^(yearStay)}

annualRentPrice = 12*monthlyCurrentRent*(1+inflationRate)^(yearStay)
annualPaymentMinusAnnualHomeEquityIncrease = 
(calculateMonthlyPayment*12) - [housePrice*(1+inflationRate)^(yearStay) - housePrice*(1
    +inflationRate)^(yearStay - 1)]

// compare that if annualRentPrice > annualPaymentMinusAnnualHomeEquityIncrease
// by more than 1k, then purchasing a home would be better. If it's the opposite,
// renting a home would be better. If the two are equal or within $1k of each other
// then it is a break even and either option would be good