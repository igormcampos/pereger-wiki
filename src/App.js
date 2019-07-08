import React from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter, Route} from "react-router-dom";

import AbilityList from './components/AbilityList'
import AbilityDetail from './components/AbilityDetail'
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/abilities" component={AbilityList}/>
              <Route path="/abilities/:ability_class" component={AbilityDetail}/>
              <Route path="/about" component={About}/>
          </div>
      </BrowserRouter>
  );
}

export default App
