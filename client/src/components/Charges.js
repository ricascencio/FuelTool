import React, { Component } from 'react'
import './Charges.css'

class Charges extends Component {
  state = {
    charges:[
      {
        "car": "polo",
        "charge_date": 1507253240003,
        "charge_formated_date": "2017-10-06T01:27:20.003Z",
        "create_date": "2017-10-06T01:27:20.003Z",
        "days": 9,
        "kms": 471,
        "lts": 38,
        "performance": 12.39
      },
      {
        "car": "polo",
        "charge_date": 1515887306523,
        "charge_formated_date": "2018-01-13T23:48:26.523Z",
        "create_date": "2018-01-13T23:48:26.523Z",
        "days": 25,
        "kms": 513,
        "lts": 39,
        "performance": 13.15
      },
      {
        "car": "polo",
        "charge_date": 1506554706078,
        "charge_formated_date": "2017-09-27T23:25:06.078Z",
        "create_date": "2017-09-27T23:25:06.078Z",
        "days": 12,
        "kms": 458,
        "lts": 38,
        "performance": 12.05
      }
    ]
  };

  componentDidMount() {
    console.log("componentDidMount " + this.props.visible);
    // if(this.props.visible){
    //   this.callApi()
    //   .then(res => this.setState({ charges: res.Items}))
    //   .catch(err => console.log(err));
    // }
  }

  componentWillMount() {
    console.log("componentWillMount " + this.props.visible);
    // if(this.props.visible){
    //   this.callApi()
    //   .then(res => this.setState({ charges: res.Items}))
    //   .catch(err => console.log(err));
    // }
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps" + this.props.visible);
  }

  callApi = async () => {
    const response = await fetch('/charge/all');
    const body = await response.json();

    if (response.status !== 200)
      throw Error(body.message);

    return body;
  }

  render() {
      let style = '';
      let odd = true;
      return <table align="center">
          <thead>
            <tr>
              <th>CAR</th>
              <th>DATE</th>
              <th>KMS</th>
              <th>LTS</th>
              <th>KMS/L</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.charges.map((charge, index) => {
              style = [];
              if(odd) style = 'tdOne';
              else style = 'tdTwo';
              odd = !odd;
              return <tr key={index}>
                  <td className={style}>{charge.car}</td>
                  <td className={style}>{charge.charge_formated_date.substring(0, 10)}</td>
                  <td className={style}>{charge.kms}</td>
                  <td className={style}>{charge.lts}</td>
                  <td className={style}>{charge.performance}</td>
                </tr>
            })
          }
          </tbody>
        </table>
  };
}

export default Charges;
