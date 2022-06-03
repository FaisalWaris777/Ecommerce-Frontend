import React from 'react';
import ORDER from './ORDER';

export default function ORDER_FIND(props) {
  return(
  props.orders.map((product,i)=>{
  return <ORDER order={product} funct={props.funct}
  key={i} />
})
  )
}