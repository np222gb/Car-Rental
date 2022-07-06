import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RentCar from './components/rentcar/rentcar'
import OverviewCars from './components/overview/overviewcars'
import Navbar from './components/navbar/navbar'
import PageNotFound from "./components/PageNotFound";
import './App.css';

class App extends Component {
  
	render() {
		return (
      <div>
		<div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element= { <RentCar />} />
            <Route exact path="/rent" element= { <RentCar />} />
            <Route exact path="/admin" element= { <OverviewCars />} />
			      <Route exact path="*" element= { <PageNotFound />} />
          </Routes>
        </Router>
      </div>
      </div>
		);
	}
}

export default App;