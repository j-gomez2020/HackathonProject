import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './components/Landing';
import Steps from './components/Steps';

function App() {
  return (
    <Router>
      <Switch>
        <Route extpath="/">
          <Landing/>
        </Route>
        <Route path="/steps">
          <Steps/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
