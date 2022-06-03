import React from 'react';
import { Link } from 'react-router-dom';
import './FOOTER.css';

export default function FOOTER(props) {
  const currency="₹";
  return props.list.length>0 ?( 
  <div id="ffooter">
    <div className="total">
    <h2>Total - {props.totalamt}<span>{currency}</span></h2></div>
    <Link to="/ADDRESS"><button type="button" className="btn2"><b>PROCEED TO BUY</b></button></Link>
    </div> 
  ):(<h2></h2>);
}
