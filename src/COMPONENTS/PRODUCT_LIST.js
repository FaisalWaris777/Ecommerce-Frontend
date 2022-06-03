import React from 'react';
import PRODUCT from './PRODUCT';
import './HOME.css';

export default function PRODUCTLIST(props) {
  return props.PL.length>0 ?(
  props.PL.map((product,i)=>{
  return <PRODUCT product={product} 
  key={i} 
  index={i} 
  ADD={props.ADD}/>
})):(<h2 className='empt'>No Product Found</h2>);
}
