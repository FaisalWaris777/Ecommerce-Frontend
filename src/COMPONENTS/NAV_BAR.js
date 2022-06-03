import React from 'react';
import './NAV_BAR.css';
import {useState} from 'react';
import search_svg from './search.svg';
import { Link } from 'react-router-dom';
import instagram from './instagram.svg';
import phone from './phone.png';
import gm from './gm.png';

export default function NAVBAR(props) {
  const [input,setinput]= useState({
    search:"",
    });

  let name,value;
  const handleInputs=(e)=>{
  name=e.target.name;
  value=e.target.value;
      setinput({...input,[name]:value});
  }

  const phonereq=async ()=>{
     const {search}=input;
     let temp=new Array();
     await props.arr.map((products,i)=>{ 
      if (new RegExp("\\b"+search+"\\b").test(products.name))
      {temp.push(products);}
    })
    props.setarr(temp);
}
  
  return(
    <div id="topnav">
      <div className='left'>
       <b>ORGCART</b>
       </div>
       <div className='search'>
       <input type="text" name="search" className="form-control" 
           id="exampleInputPassword1"
           value={input.search} 
           onChange={handleInputs} 
           placeholder="Product Name" />
      
      <button type="button" className="btn btn-primary my-3" onClick={phonereq}><img height={25} src={search_svg}/></button> 
       </div>
       <div className='home'>
       <a href="/"><b>HOME</b></a>
       </div>
       {/* <div className='about'>
       <a href="/"><b>ABOUT US</b></a>
       </div> */}
       <div className='orders'>
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