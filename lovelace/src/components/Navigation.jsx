import React, { useEffect, useState } from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';

const Navigation = ({ prevStep, nextStep }) => {
    const history = useHistory();
    const location = useLocation();
    return(
        <div className="navigation-container">
            {prevStep ? <button onClick={()=>{history.replace(prevStep)}} className="button outline">prev</button> : ''}
            <div className="progress-bar-container">
                <div className={`bar ${location.pathname === '/steps/1' ? 'active' : ''}`}>&nbsp;</div> 
                <div className={`bar ${location.pathname === '/steps/2' ? 'active' : ''}`}>&nbsp;</div> 
                <div className={`bar ${location.pathname === '/steps/3' ? 'active' : ''}`}>&nbsp;</div> 
            </div>
            {nextStep ? <button onClick={()=>{history.replace(nextStep)}} className="button primary">next</button> : <button onClick={()=> history.replace('/results')} className="primary button">show results</button>}
        </div>
    )
}

export default Navigation;