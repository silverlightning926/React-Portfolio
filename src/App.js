import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar/>
          <Switch>
              <Route path = '/' component={HomePage} exact />
              <Route path = '/projects' component={ProjectPage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
