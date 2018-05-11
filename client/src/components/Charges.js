import React, { Component } from 'react'
import './Charges.css'

class Charges extends Component {
  state = {
    charges:[
      {"car": "polo", "charge_formated_date":"2018-03-14", "kms":234, "lts":40, "performance":12}
    ]
  };

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({ charges: res.Items}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/charge/all');
    const body = await response.json();

    if (response.status !== 200)
      throw Error(body.message);

    return body;
  }

  render() {
    if(this.props.visible){
      return <table align="center">
          <thead>
            <tr>
              <th>CAR</th>
              <th>DATE</th>
              <th>KMS</th>
              <th>LTS</th>
              <th>PERFORMANCE</th>
            </tr>
          </thead>
          {this.state.charges.map((charge, index) => {
              return <tbody>
                <tr>
                  <td>{charge.car}</td>
                  <td>{charge.charge_formated_date}</td>
                  <td>{charge.kms}</td>
                  <td>{charge.lts}</td>
                  <td>{charge.performance}</td>
                </tr>
              </tbody>
            })
          }
        </table>
    }else{
      return ""
    }


  };
}

export default Charges;
