import React from 'react';
import { Link } from 'react-router-dom';
import './HOME.css';

export default function PRODUCT_FOOTER() {
  return(
  <Link to="/cart_items"><button className="btn" >GO TO CART</button></Link>
  );
}
