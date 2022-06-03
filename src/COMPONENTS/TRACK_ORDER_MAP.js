import React from 'react';
import TRACK_ORDER from './TRACK_ORDER';

export default function TRACK_ORDER_MAP(props) {
  return(
  props.track_order.map((product,i)=>{
  return <TRACK_ORDER order={product} 
  key={i} />
})
  )
}