import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar/>
          <Switch>
              <Route path = '/' component={HomePage} exact />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
