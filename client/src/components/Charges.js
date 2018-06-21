import React, { Component } from 'react'
import './Charges.css'

class Charges extends Component {
  state = {
    charges:[
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
      let style = '';
      let odd = true;
      let totalKms = 0;
      return <div><table align="center">
          <thead>
            <tr>
              <th>CAR</th>
              <th>DATE</th>
              <th>KMS/L</th>
              <th>KMS</th>
              <th>LTS</th>
              <th>DAYS</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.charges.map((charge, index) => {
              style = [];
              if(odd) style = 'tdOne';
              else style = 'tdTwo';
              odd = !odd;
              if(charge.total_kms) totalKms = charge.total_kms;
              return <tr key={index}>
                  <td className={style}>{charge.car}</td>
                  <td className={style}>{charge.charge_formated_date.substring(0, 10)}</td>
                  <td className={style}>{charge.performance}</td>
                  <td className={style}>{charge.kms}</td>
                  <td className={style}>{charge.lts}</td>
                  <td className={style}>{charge.days}</td>
                </tr>
            })
          }
          </tbody>
        </table>
        <p className="kms">polo: {parseInt(totalKms).toLocaleString(navigator.language, {minimumFractionDigits : 0})} kms</p></div>
  };
}

export default Charges;
