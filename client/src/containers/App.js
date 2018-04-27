import React, { Component } from 'react';
import Actions from '../components/Actions';
import LogChargeForm from '../components/LogChargeForm'
import Charges from '../components/Charges'

import './App.css';



class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fuel Tool</h1>
        </header>
        <div>
          <Actions/>
          <LogChargeForm/>
          <Charges/>
        </div>
      </div>
    );
  }
}

export default App;
