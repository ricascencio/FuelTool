import React, { Component } from 'react';
import Actions from '../components/Actions';
import LogChargeForm from '../components/LogChargeForm'
import Charges from '../components/Charges'

import './App.css';



class App extends Component {

  state = {
    action: "LogChargeForm"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fuel Tool</h1>
        </header>
        <div>
          <div className="Actions">
            <div className="ActionItem"><span>Log</span></div>
            <div className="ActionItem"><span>Charges</span></div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
