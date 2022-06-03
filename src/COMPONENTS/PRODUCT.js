import React from 'react';
import './PRODUCT.css';

export default function PRODUCT(props) {
  return (
  <div className="each_product">
   <div className="p_img">
    <img src={props.product.img} />
      </div>
   <div className="p_header">
   <h2>{props.product.name}</h2>
    <p className="price">{props.product.price}<span>{props.product.currency}</span></p>
  </div>
  <button type="button" className="p_btn" onClick={()=>{props.ADD(props.index,props.product.name,props.product.price,props.product.img,props.product.currency)}}>{props.product.status}</button>
  </div>
  );
}
