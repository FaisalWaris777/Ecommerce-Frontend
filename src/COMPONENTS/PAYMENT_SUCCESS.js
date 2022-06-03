import React from 'react';
import './PAYMENT_SUCCESS.css';
import tick_svg from './check.png';
import { Link,useHistory } from 'react-router-dom';

export default function PAYMENT(props) {
  return<> 
  <div className='placed'><h2><img height={25} src={tick_svg}/>  Order Successfully Placed!</h2></div>
  <div className='tt'>
  <div className='orderid'>
  <h2>Order ID : {props.orderID}</h2></div>
  <div className='date'><h2>Your Order will be delivered by {props.date}  </h2></div>
  <div className='thanks'><h2>Thanks for Shopping !!</h2></div>
  <div className='a'><a href="/"><b><h3>SHOP</h3></b></a></div>
  </div></>
}
