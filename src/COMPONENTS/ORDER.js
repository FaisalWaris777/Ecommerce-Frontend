import React from 'react';
import { Link } from 'react-router-dom';
import './ORDER.css';
const currency="₹";

export default function ORDER(props) {
  return (
  <div className="orders">
   <div className="o_id">
   <Link to="/track" onClick={()=>{props.funct(props.order.orderID)}}><h2>{props.order.orderID}</h2></Link>
   </div>
   <div className='d_d'>{props.order.d_date}</div>
  <div className="o_amt">
  <h2>{props.order.amt}<span>{currency}</span></h2>
  </div>
  </div>
  );
}
