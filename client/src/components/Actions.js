import React from 'react';
import Radium from 'radium';
import './Actions.css'



const actions = (props) =>{
  return <div className="Actions">
    <div className="ActionItem"><span>Log</span></div>
    <div className="ActionItem"><span>Charges</span></div>
  </div>
};


export default Radium(actions);
