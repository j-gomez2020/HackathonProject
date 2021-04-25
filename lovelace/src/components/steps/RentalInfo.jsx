import React, {useState} from 'react';
import Navigation from '../Navigation';

const RentalInfo = ({setRentalInfo}) => {
    const [util, setUtil] = useState();
    const [monthlyRent, setMonthlyRent] = useState();
    const [utilCost, setUtilCost] = useState(0);

    const nextStep = '/steps/2';

    const toggleUtilities = (e) => {
        setUtil(e.target.value); //track util status to conditionally render util cost input
    }

    const handleFormSubmit = () => {
        setRentalInfo({
            monthlyRent,
            utilCost
        });
        console.log('submitting form')
    }

    return(
        <div className="step-container">
            <form>
                <label for="rentCost" className="input-label">Monthly Rent</label>
                <input name="rentCost" type="text"></input>
                <label for="utilities" className="input-label">Are utilities included?</label>
                <div onChange={toggleUtilities}>
                    <label className="radio">
                        <span className="radio__input">
                            <input type="radio" name="utilities" value="yes"/>
                            <span className="radio__control"></span>
                            Yes
                        </span>
                    </label>
                    <label className="radio">
                        <span className="radio__input">
                            <input type="radio" name="utilities" value="no"/>
                            <span className="radio__control"></span>
                            No
                        </span>
                    </label>
                </div>
                { util === 'yes' ? 
                <>
                    <label for="utilitiesCost" className="input-label">Monthly Utilities Cost</label>
                    <input name="utilitiesCost" type="text"></input>
                </> : ''}
            </form>
            <Navigation nextStep={nextStep} submitAction={handleFormSubmit}/>
        </div>
    )
}

export default RentalInfo;