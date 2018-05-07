import React, { Component } from 'react'
import './Charges.css'

class Charges extends Component {
  state = {
    charges:[
      {"car": "polo", "charge_date":"2018-03-14", "kms":234, "lts":40, "performance":12}
    ]
  };

  // componentDidMount() {
  //   this.callApi()
  //   .then(res => this.setState({ charges: res.Items}))
  //   .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/charges');
  //   const body = await response.json();

  //   if (response.status !== 200)
  //     throw Error(body.message);

  //   return body;
  // }

  render() {
    return <table align="center">
        <tr>
          <th>CAR</th>
          <th>DATE</th>
          <th>KMS</th>
          <th>LTS</th>
          <th>PERFORMANCE</th>
        </tr>
        {this.state.charges.map((charge, index) => {
            return <tr>
              <td>{charge.car}</td>
              <td>{charge.charge_date}</td>
              <td>{charge.kms}</td>
              <td>{charge.lts}</td>
              <td>{charge.performance}</td>
            </tr>
          })
        }
      </table>
    
  };
}

export default Charges;
