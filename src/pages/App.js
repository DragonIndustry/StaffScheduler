import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Title from "../components/common/Title";

import CreateStaff from '../components/CreateStaff';
import ShowStaffList from '../components/ShowStaffList';
import ShowStaffDetails from '../components/ShowStaffDetails';
import UpdateStaffDetails from '../components/UpdateStaffDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Title />
        </div>
      </Router>
    );
  }
}

export default App;
