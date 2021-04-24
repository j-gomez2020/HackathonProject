import React, {useState} from 'react';

const HouseInfo = () => {
    const [hoa, setHOA] = useState();

    const toggleHOA = (e) => {
        setHOA(e.target.value); //track HOA status to conditionally render HOA cost input
    }

    return(
        <>
            <form>
                <label for="homePrice">Home Price</label>
                <input name="homePrice" type="text"></input>
                <label for="downPayment">Down Payment</label>
                <input name="downPayment" type="text"></input>
                <label for="hoa">Is there an HOA?</label>
                <div onChange={toggleHOA}>
                    <input type="radio" name="hoa" value="yes" id="yes"></input>
                    <label for="yes">Yes</label>
                    <input type="radio" name="hoa" value="no" id="no"></input>
                    <label for="no">No</label>
                </div>
                { hoa === 'yes' ? 
                <>
                    <label for="hoaCost">Monthly HOA Dues</label>
                    <input name="hoaCost" type="text"></input>
                </> : ''}
                <label for="downPayment">Address</label>
                <input name="downPayment" type="text"></input>
            </form>
        </>
    )
}

export default HouseInfo;