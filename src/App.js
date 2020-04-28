import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './Components/nav'
import Login from './Components/Login'
import Register from './Components/Register'
import './css files/App.css';

function App() {
  return (
    <Router>
    <div className="App">
       <div> <Nav /></div>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/Register'  component={Register}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
