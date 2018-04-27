import React, { Component } from 'react'
import './LogChargeForm.css'

class LogChargeForm extends Component {

  state = {
    kms: '',
    lts: '',
    car: ''
  }

  submitHandler(event) {
    event.preventDefault();
    console.log('kms', this.state.kms);
    console.log('lts', this.state.lts);
    console.log('car', this.state.car);
  }

  changeHandler = (event, inputIdentifier) => {
    console.log('target', event.target.value);
    this.setState(
      {kms: event.target.value}
    );
    console.log('kms', this.state.kms);
    console.log('lts', this.state.lts);
  }

  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <div className="Column Label">Kms &nbsp;</div><div className="Column Field"><input type="text" size="5" value={this.state.kms} onChange={(event) => this.changeHandler(event, 'kms')}/></div><br/><br/>
          <div className="Column Label">Lts &nbsp;</div><div className="Column Field"><input type="text" size="5" value={this.state.lts} onChange={(event) => this.changeHandler(event, 'lts')} /></div><br/><br/>
          <div className="Column Label">Car &nbsp;</div>
          <div className="Column Field">
            <select value={this.state.car}>
              <option value="Polo">Polo</option>
              <option value="Versa">Versa</option>
            </select>
          </div><br/><br/>
          <input className="SaveButton" type="submit" value="Save"/>
        </div>
      </form>
    )
  };

}

export default LogChargeForm
