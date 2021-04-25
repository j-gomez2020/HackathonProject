import React, {useState} from 'react';
import Navigation from '../Navigation';

const LoanInfo = ({setLoanInfo}) => {
    const [selected, setSelected] = useState();
    const [interestRate, setInterestRate] = useState();

    const prevStep = '/steps/2';

    const handleFormSubmit = () => {
        setLoanInfo({
            selected,
            interestRate
        })
    }

    return(
        <div className="step-container">
            <form>
                <label for="loanTerm" className="input-label">Loan Term in Years</label>
                <div className="row">
                    <div className={`dot ${selected === 10 ? 'active' : ''}`} onClick={() => setSelected(10)}>
                        <span>10</span>
                    </div>
                    <div className={`dot ${selected === 15 ? 'active' : ''}`} onClick={() => setSelected(15)}>
                        <span>15</span>
                    </div>
                    <div className={`dot ${selected === 30 ? 'active' : ''}`} onClick={() => setSelected(30)}>
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