import React, {useState} from 'react';
import Navigation from '../Navigation';
import Autocomplete from "react-google-autocomplete";


const HouseInfo = ({setHouseInfo}) => {
    const [hoa, setHOA] = useState();
    const [hoaCost, setHoaCost] = useState(0);
    const [homePrice, setHomePrice] = useState();
    const [downPayment, setDownPayment] = useState();
    const [address, setAddress] = useState();
    const nextStep = '/steps/3';
    const prevStep = '/steps/1';

    const toggleHOA = (e) => {
        setHOA(e.target.value); //track HOA status to conditionally render HOA cost input
    }

    const handleAddressSearch = (e) => {
        let query = e.target.value;
        setAddress(query);
        // i am here



    }

    const handleFormSubmit = () => {
        setHouseInfo({
            homePrice,
            downPayment,
            hoaCost,
            address
        })
    }


    return(
        <div className="step-container">
            <form>
                <label for="homePrice"  className="input-label">Home Price</label>
                <input name="homePrice" type="text" onChange={(e) => setHomePrice(parseInt(e.target.value))}></input>
                <label for="downPayment" className="input-label">Down Payment</label>
                <input name="downPayment" type="text" onChange={(e) => setDownPayment(parseInt(e.target.value))}></input>
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
                    <input name="hoaCost" type="text" onChange={(e) => setHoaCost(parseInt(e.target.value))}></input>
                </> : ''}
                <label for="address" className="input-label">Address</label>
                <input name="address" type="text" onChange={handleAddressSearch}></input>
                <Autocomplete
                    apiKey={myapiKey}
                    onPlaceSelected={(e)=>setAddress(e.target.value)}
                    options={{types:["(address)"], componentRestrictions:{country:"us" }}
                />
            </form>
            <Navigation nextStep={nextStep} prevStep={prevStep} submitAction={handleFormSubmit}/>
        </div>
    )
}

export default HouseInfo;