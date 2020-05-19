import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Switch>
            <Route path = '/' component={HomePage} exact />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
