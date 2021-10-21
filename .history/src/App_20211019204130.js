import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <h1>Let's build amazon-clone using ReactJS</h1>
        <Switch>
          <Route path="/checkout"></Route>
        </Switch>
      </div>
   </Router>
  );
}

{ 
  /* We Need React-Router */
}

export default App;
