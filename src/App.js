import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CityList from './pages/CityList'
import Map from './pages/Map'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/cityList" component={CityList}></Route>
          <Route path="/map" component={Map}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
