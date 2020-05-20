import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar/>
          <Switch>
              <Route path = '/' component={HomePage} exact />
              <Route path = '/projects' component={ProjectPage} />
              <Route path = '/about' component={About} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
