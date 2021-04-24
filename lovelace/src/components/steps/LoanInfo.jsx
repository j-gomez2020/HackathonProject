import React from 'react';

const LoanInfo = () => {
    return(
        <>
            <form>
                <label for="loanTerm">Loan Term in Years</label>
                <input type="radio" name="loanTerm" value="10"></input>
                <label for="10">10</label>
                <input type="radio" name="loanTerm" value="15"></input>
                <label for="15">15</label>
                <input type="radio" name="loanTerm" value="30"></input>
                <label for="30">30</label>
                <label for="interestRate">Interest Rate</label>
                <input type="text"></input>
            </form>
        </>
    )
}

export default LoanInfo;