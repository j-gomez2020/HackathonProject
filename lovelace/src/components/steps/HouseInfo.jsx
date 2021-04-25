import React, {useEffect, useState} from 'react';
import Navigation from '../Navigation';
import Autocomplete from "react-google-autocomplete";
import PlacesAutocomplete from 'react-google-places-autocomplete';
import axios from 'axios';


const HouseInfo = ({setHouseInfo}) => {
    const [hoa, setHOA] = useState();
    const [hoaCost, setHoaCost] = useState(0);
    const [homePrice, setHomePrice] = useState();
    const [downPayment, setDownPayment] = useState();
    const [address, setAddress] = useState();
    const nextStep = '/steps/3';
    const prevStep = '/steps/1';

    const apiKey = 'AIzaSyDMgJ54M0EdN3MHyCGDYT-agiL_N2BXZKA';

    const toggleHOA = (e) => {
        setHOA(e.target.value); //track HOA status to conditionally render HOA cost input
    }

    const handleAddressSearch = (e) => {
        let query = e.target.value;
        setAddress(query);
    }

    const handleFormSubmit = () => {
        setHouseInfo({
            homePrice,
            downPayment,
            hoaCost,
            address
        })
    }
    console.log('address', address)


    return(
        <div className="step-container">
            <div className="">
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
                <label for="streetAdd" className="input-label">Address</label>
                <PlacesAutocomplete autocomplete="off" className="input" apiKey={apiKey} apiOptions={{ language: 'en', region: 'us' }}
                    selectProps={{
                    address,
                    onChange: setAddress,
                  }}
                />
            </div>
            <Navigation nextStep={nextStep} prevStep={prevStep} submitAction={handleFormSubmit}/>
        </div>
    )
}

export default HouseInfo;