import React from 'react';
import './NAV_BAR.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import instagram from './instagram.svg';
import phone from './phone.png';
import gm from './gm.png';

export default function NAVBAR_1(props) {
  
  return(
    <div id="topnav">
      <div className='left'>
       <b>ORGCART</b>
       </div>
     
       <div className='home_1'>
       <a href="/"><b>HOME</b></a>
       </div>
       <div className='orders_1'>
       <a href="/login"><b>ORDERS</b></a>
       </div>
       <div className='inst'>
       <button type="button" className="btn"><a href="https://www.instagram.com/faisal_waris_/"><img height={25} src={instagram}/></a></button>
       </div>
       <div className='phone'>
       <button type="button" className="btn"><a href="tel:+919871374864"><img height={25} src={phone}/></a></button>
       </div>
       <div className='email'>
       <button type="button" className="btn"><a href="mailto:faisalwarisdli@gmail.com"><img height={25} src={gm}/></a></button>
       </div>
    </div>
  );
}