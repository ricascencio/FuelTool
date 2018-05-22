import React, { Component } from 'react'
import Calendar from 'react-calendar';
import './LogChargeForm.css'

class LogChargeForm extends Component {

  state = {
    kms: '',
    lts: '',
    car: 'polo',
    date: new Date(),
    responseMessage: ''
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log("submitHandler");
    let car = this.state.car;
    let kms = this.state.kms;
    let lts = this.state.lts;
    let date = this.state.date;

    if(car && kms && lts && date){
      fetch('/charge/add',{
        method: 'POST',
        body:JSON.stringify({
          car: car,
          kms: kms,
          lts: lts,
          chargeDate: date,
          createDate: new Date()
        }),
        headers: {"Content-Type": "application/json"}
      })
      .then( response => {
        console.log("RESPONSE " + response.body);
        return response
      }).then( body => {
        this.setState({ responseMessage: "body"});
        return body;
      });
    }
  }

  changeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(
      {[name]: value}
    );
  }

  changeDate = date => this.setState({date})

  render () {
      return (
        <form name="form">
          <div>
            <div className="Column Label">Car &nbsp;</div>
            <div className="Column Field">
              <select name="car" value={this.state.car} onChange={(event) => this.changeHandler(event)}>
                <option value="polo">Polo</option>
                <option value="versa">Versa</option>
              </select>
            </div><br/><br/>
            <div className="Column Label">Kms &nbsp;</div><div className="Column Field"><input name="kms" type="text" size="5" value={this.state.kms} onChange={(event) => this.changeHandler(event)}/></div><br/><br/>
            <div className="Column Label">Lts &nbsp;</div><div className="Column Field"><input name="lts" type="text" size="5" value={this.state.lts} onChange={(event) => this.changeHandler(event)} /></div><br/><br/>
            <div className="Column Label">Date &nbsp;</div>
            <div className="Column Field">
              <Calendar
                onChange={this.changeDate}
                value={this.state.date}/>
            </div><br/><br/>
            <input className="SaveButton" type="button" value="Save" onClick={(event) => this.submitHandler(event)}/><br/><br/>
          </div>
          {this.state.responseMessage}
        </form>
      )
  };

}

export default LogChargeForm
