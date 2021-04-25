import React, {useState} from 'react';
import Navigation from '../Navigation';

const RentalInfo = () => {
    const [util, setUtil] = useState();
    const nextStep = '/steps/2';
    const toggleUtilities = (e) => {
        setUtil(e.target.value); //track util status to conditionally render util cost input
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
            <Navigation nextStep={nextStep}/>
        </div>
    )
}

export default RentalInfo;