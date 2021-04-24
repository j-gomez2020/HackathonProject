import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing></Home>
        </Route>
        <Route path="/step"
      </Switch>
    </Router>
  );
}

export default App;
