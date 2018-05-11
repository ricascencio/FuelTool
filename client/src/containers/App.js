import React, { Component } from 'react';
import LogChargeForm from '../components/LogChargeForm'
import Charges from '../components/Charges'

import './App.css';



class App extends Component {

  state = {
    action: "LogChargeForm"
  }

  handleClickAction(newAction){
      this.setState({action: newAction});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fuel Tool</h1>
        </header>
        <div>
          <div className="Actions">
            <div className="ActionItem" onClick={(event) => this.handleClickAction("Log", event)}><span>Log</span></div>
            <div className="ActionItem" onClick={(event) => this.handleClickAction("Charges", event)}><span>Charges</span></div>
          </div>
            <LogChargeForm visible={this.state.action === "Log"}/>
            <Charges visible={this.state.action === "Charges"}/>
        </div>
      </div>
    );
  }
}

export default App;
