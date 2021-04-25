import React, {useState} from 'react';
import Navigation from '../Navigation';

const LoanInfo = ({setLoanInfo}) => {
    const [loanTerm, setLoanTerm] = useState();
    const [interestRate, setInterestRate] = useState();

    const prevStep = '/steps/2';

    const handleFormSubmit = () => {
        setLoanInfo({
            loanTerm,
            interestRate
        })
    }

    return(
        <div className="step-container">
            <form>
                <label for="loanTerm" className="input-label">Loan Term in Years</label>
                <div className="row">
                    <div className={`dot ${loanTerm === 10 ? 'active' : ''}`} onClick={() => setLoanTerm(10)}>
                        <span>10</span>
                    </div>
                    <div className={`dot ${loanTerm === 15 ? 'active' : ''}`} onClick={() => setLoanTerm(15)}>
                        <span>15</span>
                    </div>
                    <div className={`dot ${loanTerm === 30 ? 'active' : ''}`} onClick={() => setLoanTerm(30)}>
                        <span>30</span>
                    </div>
                </div>
                <label for="interestRate" className="input-label">Interest Rate</label>
                <input type="text" onChange={(e) => setInterestRate(parseInt(e.target.value))}></input>
            </form>

            <Navigation prevStep={prevStep} submitAction={handleFormSubmit} />
        </div>
    )
}

export default LoanInfo;