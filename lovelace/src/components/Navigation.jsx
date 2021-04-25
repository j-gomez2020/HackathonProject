import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';

const Navigation = ({ prevStep, nextStep }) => {
    const history = useHistory();
    const location = useLocation();
    return(
        <div className="navigation-container">
            <button onClick={()=>{history.replace(prevStep)}} className={`button outline ${prevStep ? '' : 'disabled'}`}>prev</button>
            <div className="progress-bar-container">
                <div className={`bar ${location.pathname === '/steps/1' ? 'active' : ''}`} onClick={()=>{history.replace('/steps/1')}}>&nbsp;</div> 
                <div className={`bar ${location.pathname === '/steps/2' ? 'active' : ''}`} onClick={()=>{history.replace('/steps/2')}}>&nbsp;</div> 
                <div className={`bar ${location.pathname === '/steps/3' ? 'active' : ''}`} onClick={()=>{history.replace('/steps/3')}}>&nbsp;</div> 
            </div>
            {nextStep ? <button onClick={()=>{history.replace(nextStep)}} className="button primary">next</button> : <button onClick={()=> history.replace('/results')} className="primary button">show results</button>}
        </div>
    )
}

export default Navigation;