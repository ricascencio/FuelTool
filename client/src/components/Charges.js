import React, { Component } from 'react'

class Charges extends Component {
  state = {
    response:''
  };

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({ response: res.express}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/charges');
    const body = await response.json();

    if (response.status !== 200)
      throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <p>{this.state.response}</p>
      </div>
    )
  }
}

export default Charges;
