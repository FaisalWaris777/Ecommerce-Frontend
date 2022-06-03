import React from 'react';
import './PRODUCTS_TYPES.css';

export default function PRODUCT_TYPES(props) {

    const phonereq=async (t)=>{
        let temp=new Array();
         props.arr.map((products,i)=>{ 
         if (t===products.type)
         {temp.push(products);}
       })
       props.setarr(temp);
   }

  return (
    <fieldset>
    <legend><b>Our Products:</b></legend>
    <div className='types'>
        <div className='org'><button type="button" className="body_care" onClick={()=>{phonereq("tea")}}>Organic Tea</button></div>

    <div className='org'><button type="button" className="body_care" onClick={()=>{phonereq("rice")}}>Organic Rice</button></div>

    <div className='org'><button type="button" className="body_care" onClick={()=>{phonereq("sugar")}}>Organic Sugar</button></div>

    <div className='org'><button type="button" className="body_care" onClick={()=>{phonereq("salt")}}>Natural Salts</button></div>
    
    <div className='org'><button type="button" className="body_care" onClick={()=>{phonereq("suji")}}>Organic Cerial</button></div>
    
    <div className='org'><button type="button" className="vegetables" onClick={()=>{phonereq("flour")}}>Organic Flours</button></div>
    
    <div className='org'><button type="button" className="body_care" onClick={()=>{phonereq("dal")}}>Organic Pluses</button></div>
    
    <div className='org'><button type="button" className="body_care" onClick={()=>{phonereq("spice")}}>Organic Spices</button></div>

    <div className='org'><button type="button" className="body_care" onClick={()=>{phonereq("dry")}}>Organic Dry Fruits</button></div>
    
    </div>  
    </fieldset>

  )};