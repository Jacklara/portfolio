import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Credentials from './Pages/Credentials';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

const App = () => {

  return (
    <>
      <Router>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path='/resume' component={Credentials} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
