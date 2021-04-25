import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

const Navigation = ({ prevStep, nextStep }) => {
    const history = useHistory();
    return(
        <div className="navigation-container">
            {prevStep ? <button onClick={()=>{history.replace(prevStep)}} className="button outline">prev</button> : ''}
            <div className="progress-bar-container">
                <div className="bar">1</div> 
                <div className="bar">2</div> 
                <div className="bar">3</div> 
            </div>
            {nextStep ? <button onClick={()=>{history.replace(nextStep)}} className="button primary">next</button> : <button onClick={()=> history.replace('/results')} className="primary button">show results</button>}
        </div>
    )
}

export default Navigation;