let housePrice = 400000;
let interestRate = 3.25;
let monthlyInterestRate = interestRate/12;
let paymentYears = 30;
let monthlyHoa = 500;
let monthlyInsurance = 200;
let downPayment = 200000;
let totalMortgage = housePrice - downPayment;
let fixedMonthlyMortgagePayment = (totalMortgage * (monthlyInterestRate*(1+monthlyInterestRate)^(paymentYears*12))) / ((1+monthlyInterestRate)^(paymentYears*12))

const calculateMonthlyPayment = (fixedMonthlyMortgagePayment, housePrice,
     monthlyHoa, monthlyInsurance) => {
         const result = fixedMonthlyMortgagePayment + ((housePrice)*1.2/12) + monthlyHoa + monthlyInsurance;
         console.log(result)
         return result;
    }

calculateMonthlyPayment(fixedMonthlyMortgagePayment, housePrice, monthlyHoa, monthlyInsurance);

let monthlyCurrentRent = 25000;
let yearStay = 5;
let inflationRate = 1.04;

const calculateNewRentPrice = (monthlyCurrentRent, 
    inflationRate, yearStay) => { 
        const result = monthlyCurrentRent*(1+inflationRate)^(yearStay);
        return result;
}

calculateNewRentPrice(monthlyCurrentRent, inflationRate, yearStay);


const annualRentPrice = 12*monthlyCurrentRent*(1+inflationRate)^(yearStay)

const annualPaymentMinusAnnualHomeEquityIncrease = 
(calculateMonthlyPayment*12) - [housePrice*(1+inflationRate)^(yearStay) - housePrice*(1
    +inflationRate)^(yearStay - 1)]

// compare that if annualRentPrice > annualPaymentMinusAnnualHomeEquityIncrease
// by more than 1k, then purchasing a home would be better. If it's the opposite,
// renting a home would be better. If the two are equal or within $1k of each other
// then it is a break even and either option would be good