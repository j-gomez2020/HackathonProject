import React, {useState} from 'react';

const RentalInfo = () => {
    const [util, setUtil] = useState();

    const toggleUtilities = (e) => {
        setUtil(e.target.value); //track util status to conditionally render util cost input
    }

    return(
        <>
            <form>
                <label for="rentCost">Monthly Rent</label>
                <input name="rentCost" type="text"></input>
                <label for="utilities">Are utilities included?</label>
                <div onChange={toggleUtilities}>
                    <input type="radio" name="utilities" value="yes" id="yes"></input>
                    <label for="yes">Yes</label>
                    <input type="radio" name="utilities" value="no" id="no"></input>
                    <label for="no">No</label>
                </div>
                { util === 'yes' ? 
                <>
                    <label for="utilitiesCost">Monthly Utilities Cost</label>
                    <input name="utilitiesCost" type="text"></input>
                </> : ''}
            </form>
        </>
    )
}

export default RentalInfo;