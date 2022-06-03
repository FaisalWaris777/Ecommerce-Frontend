import React from 'react';
import F_PRODUCT from './F_PRODUCT';

export default function CART_ITEMS(props) {
    
   return props.list.length>0 ?(
    props.list.map((product,i)=>{
    return <F_PRODUCT product={product} 
    key={i} 
    index={i}  
    IQ={props.IQ} 
    DQ={props.DQ} 
    REMOVE={props.REMOVE}
     />
  })):(<h2>CART IS EMPTY</h2>);
  }
