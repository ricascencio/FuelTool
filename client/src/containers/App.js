import React, { Component } from 'react';
import LogChargeForm from '../components/LogChargeForm'
import Charges from '../components/Charges'

import './App.css';



class App extends Component {

  state = {
    action: "Log",
    actionItem: [
      <div key="1"><LogChargeForm/></div>
    ]
  }

  handleClickAction(newAction){
    let actionItem;
    if(newAction === "Log")
      actionItem = [<div key="1"><LogChargeForm/></div>];
    else
      actionItem = [<div key="2"><Charges/></div>];
    this.setState(
      {action: newAction ,actionItem: actionItem}
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fuel Tool</h1>
        </header>
        <div>
          <div className="Actions">
            <div className={(this.state.action === 'Log'?'ActionItemSelected':'ActionItem')} onClick={(event) => this.handleClickAction("Log", event)}><span>Log</span></div>
            <div className={(this.state.action === 'Charges'?'ActionItemSelected':'ActionItem')} onClick={(event) => this.handleClickAction("Charges", event)}><span>Charges</span></div>
          </div>
        {this.state.actionItem}
        </div>
      </div>
    );
  }
}

export default App;
