import React, {useState} from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from './components/Landing';
import Steps from './components/Steps';
import Results from './components/Results';
import RentalInfo from './components/steps/RentalInfo';
import LoanInfo from './components/steps/LoanInfo';
import HouseInfo from './components/steps/HouseInfo';


import './styles/app.scss';

function App() {
  const [rentalInfo, setRentalInfo] = useState();
  const [houseInfo, setHouseInfo] = useState();
  const [loanInfo, setLoanInfo] = useState();

  const [homePrice, setHomePrice] = useState();
  const [downPayment, setDownPayment] = useState();
  const [hoaDues, setHoaDues] = useState(0);
  const [address, setAddress] = useState();
  const [loanTerm, setLoanTerm] = useState();
  const [interestRate, setInterestRate] = useState();


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/steps/1">
          <RentalInfo setRentalInfo={setRentalInfo}/>
        </Route>
        <Route path="/steps/2">
          <HouseInfo setHouseInfo={setHouseInfo}/>
        </Route>
        <Route path="/steps/3">
          <LoanInfo setLoanInfo={setLoanInfo}/>
        </Route>
        <Route path="/results">
          <Results/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
