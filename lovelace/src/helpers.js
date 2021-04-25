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

currentRent = 300000;
yearStay = 5;
inflationRate = 1.04;

const newRentPrice = (currentRent, 
    inflationRate, yearStay) => {currentRent*(1+inflationRate)^(yearStay)}
