import React, { Component } from 'react'
import Calendar from 'react-calendar';
import './LogChargeForm.css'

class LogChargeForm extends Component {

  state = {
    kms: '',
    lts: '',
    car: '',
    date: new Date()
  }

  submitHandler(event) {
    console.log('kms', this.state.kms);
    console.log('lts', this.state.lts);
    console.log('car', this.state.car);
  }

  changeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(
      {[name]: value}
    );
    console.log('kms', this.state.kms);
    console.log('lts', this.state.lts);
  }

  render () {
    if(this.props.visible){
      return (
        <form onSubmit={this.submitHandler} action="charge/add">
          <div>
            <div className="Column Label">Kms &nbsp;</div><div className="Column Field"><input name="kms" type="text" size="5" value={this.state.kms} onChange={(event) => this.changeHandler(event)}/></div><br/><br/>
            <div className="Column Label">Lts &nbsp;</div><div className="Column Field"><input name="lts" type="text" size="5" value={this.state.lts} onChange={(event) => this.changeHandler(event)} /></div><br/><br/>
            <div className="Column Label">Date &nbsp;</div>
            <div className="Column Field">
              <Calendar
                onChange={(event) => this.changeHandler(event)}
                name="date"
                value={this.state.date}/>
            </div><br/><br/>
            <div className="Column Label">Car &nbsp;</div>
            <div className="Column Field">
              <select name="car" value={this.state.car} onChange={(event) => this.changeHandler(event)}>
                <option value="Polo">Polo</option>
                <option value="Versa">Versa</option>
              </select>
            </div><br/><br/>
            <input className="SaveButton" type="submit" value="Save"/>
          </div>
        </form>
      )
    }else {
      return ""
    }

  };

}

export default LogChargeForm
