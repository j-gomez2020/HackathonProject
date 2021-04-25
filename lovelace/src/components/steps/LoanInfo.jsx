import React, {useState} from 'react';
import Navigation from '../Navigation';

const LoanInfo = () => {

    const [selected, setSelected] = useState();
    const prevStep = '/steps/2';
    return(
        <>
            <form>
                <label for="loanTerm" className="input-label">Loan Term in Years</label>
                <div className="row">
                    <div className="dot">
                        <span>10</span>
                    </div>
                    <div className="dot">
                        <span>15</span>
                    </div>
                    <div className="dot">
                        <span>30</span>
                    </div>
                </div>
                <label for="interestRate" className="input-label">Interest Rate</label>
                <input type="text"></input>
            </form>

            <Navigation prevStep={prevStep} />
        </>
    )
}

export default LoanInfo;