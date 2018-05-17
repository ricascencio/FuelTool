import React, { Component } from 'react'
import './Charges.css'

class Charges extends Component {
  state = {
    charges:[

    ]
  };

  componentDidMount() {
    if(this.props.visible){
      this.callApi()
      .then(res => this.setState({ charges: res.Items}))
      .catch(err => console.log(err));
    }
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
      let style = '';
      let odd = true;
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
          <tbody>
          {
            this.state.charges.map((charge, index) => {
              style = [];
              if(odd) style = 'tdOne';
              else style = 'tdTwo';
              odd = !odd;
              return <tr key={index}>
                  <td className={style}>{charge.car}</td>
                  <td className={style}>{charge.charge_formated_date}</td>
                  <td className={style}>{charge.kms}</td>
                  <td className={style}>{charge.lts}</td>
                  <td className={style}>{charge.performance}</td>
                </tr>
            })
          }
          </tbody>
        </table>
    }else{
      return ""
    }


  };
}

export default Charges;
