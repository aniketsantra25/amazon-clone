import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <h1>Let's build amazon-clone using ReactJS</h1>
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Router path="/login">
            <h1>Login Page</h1>
          </Router>
          <Route path="/">
            <h1>Checkout</h1>
          </Route>
        </Switch>
      </div>
   </Router>
  );
}

{ 
  /* We Need React-Router */
}

export default App;