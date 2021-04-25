import React, {useState} from 'react';
import Navigation from '../Navigation';

const HouseInfo = () => {
    const [hoa, setHOA] = useState();
    const nextStep = '/steps/3';
    const prevStep = '/steps/1';
    
    const toggleHOA = (e) => {
        setHOA(e.target.value); //track HOA status to conditionally render HOA cost input
    }


    const handleAddressSearch = (e) => {
        let query = e.target.value;
        //TODO
    }


    return(
        <div className="step-container">
            <form>
                <label for="homePrice"  className="input-label">Home Price</label>
                <input name="homePrice" type="text"></input>
                <label for="downPayment" className="input-label">Down Payment</label>
                <input name="downPayment" type="text"></input>
                <label for="hoa" className="input-label">Is there an HOA?</label>
                <div onChange={toggleHOA}>
                    <label className="radio">
                        <span className="radio__input">
                            <input type="radio" name="hoa" value="yes"/>
                            <span className="radio__control"></span>
                            Yes
                        </span>
                    </label>
                    <label className="radio">
                        <span className="radio__input">
                            <input type="radio" name="hoa" value="no"/>
                            <span className="radio__control"></span>
                            No
                        </span>
                    </label>
                </div>
                { hoa === 'yes' ? 
                <>
                    <label for="hoaCost" className="input-label">Monthly HOA Dues</label>
                    <input name="hoaCost" type="text"></input>
                </> : ''}
                <label for="address" className="input-label">Address</label>
                <input name="address" type="text" onChange={handleAddressSearch}></input>
            </form>
            <Navigation nextStep={nextStep} prevStep={prevStep}/>
        </div>
    )
}

export default HouseInfo;