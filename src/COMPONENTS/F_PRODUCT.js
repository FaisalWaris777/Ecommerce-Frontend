import React from 'react';
import './F_PRODUCT.css';


export default function F_PRODUCT(props) {
  return (
  <div className="fproduct">
   <div className="f_img">
    <img src={props.product.img} />
      </div>
      <div className='box'>
   <div className="fp_name">
    <h2>{props.product.name}</h2>
   </div>
  <div className="fp_buttons">
  <button type="button" className="btnn" onClick={()=>{props.DQ(props.index)}}>-</button>
  <button type="button" className="d_btn">{props.product.quantity} kg</button>
  <button type="button" className="btnn" onClick={()=>{props.IQ(props.index)}}>+</button>
  <button type="button" className="btnn" onClick={()=>{props.REMOVE(props.index)}}>Remove</button>
  </div>
  <hr className='line'/>
  </div>
  <div className="fp_price">
  <h2>{props.product.price}<span>{props.product.currency}</span></h2>
  </div>
  </div>
  );
}
