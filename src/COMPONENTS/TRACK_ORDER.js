import React from 'react';
import './TRACK_ORDERS.css'

export default function TRACK_ORDER(props) {
  return (
    <div className="tproduct">
    <div className='t2'>
    <div className="t_img">
     <img src={props.order.img} />
       </div>
    <div className="t_name">
     {props.order.name}
   </div></div>
   <div className="t_price">
   {props.order.quantity}
   </div>
   </div>
  );
}