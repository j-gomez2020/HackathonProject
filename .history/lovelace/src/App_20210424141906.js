import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './components/Landing';
import Steps from './components/Steps';
import Results from './components/Results';
import 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/steps">
          <Steps/>
        </Route>
        <Route path="/results">
          <Results/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
