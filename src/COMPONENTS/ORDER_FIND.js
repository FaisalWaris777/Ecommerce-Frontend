import React from 'react';
import {useState,useEffect} from 'react';
import './ORDER_FIND.css';
import { authentication} from './firebase';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";

export default function ORDERS_FIND(props) {
  let [t,sett]=useState("Generate OTP");

    const [input,setinput]= useState({
        phone:"",
        otp:"",
        });

       const requestotp=()=>{
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
        }
      }, authentication);
      console.log("captcha verified");
      onSignInSubmit();}

       const onSignInSubmit=()=>{
         const {phone}=input;
         const phoneNumber='+91'+phone;
         const appVerifier = window.recaptchaVerifier;
         signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
       .then((confirmationResult) => {
         // SMS sent. Prompt user to type the code from the message, then sign the
         // user in with confirmationResult.confirm(code).
         window.confirmationResult = confirmationResult;
         // ...
       }).catch((error) => {
         console.log(error);
         // Error; SMS not sent
         // ...
       });}

       const otpverify=()=>{
        const {otp,phone}=input;
        const code = otp;
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log("successfully signed in");
          {props.forder(phone);}
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          alert("Wrong OTP");
        });
       }

    let name,value;
    const handleInputs=(e)=>{
    name=e.target.name;
    var b=0;
    value=e.target.value;
    const re = /^[0-9]+$/;
     if(value===''||re.test(e.target.value)){
        b=1;}
        else{alert("only Digits are allowed")}
      if(b===1){
        setinput({...input,[name]:value});}
    }

    const phonereq=()=>{
        const {phone}=input;
        if(phone.length===10){
          sett("Regenerate OTP")
          requestotp();
        }
        else{
            alert("Mobile Number Should be of 10 digit!");
        }
    }

    return (
        <div className='ofdiv'>
    <div className="find_order">
     <h2>Mobile Verification</h2>
    <div id='sign-in-button'></div>
        <div className='phone_num'>
          <input type="text" name="phone" className="mobile_num" 
           id="exampleInputPassword1"
           value={input.phone} 
           onChange={handleInputs} 
           placeholder="Enter Mobile Number" />
    <button type="button" className="btn btn-primary my-3" onClick={phonereq}>{t}</button>
    </div>
    <div className='otp'>
          <input type="text" name="otp" className="mobile_otp" 
           id="exampleInputPassword1"
           value={input.otp} 
           onChange={handleInputs} 
           placeholder="Enter OTP" />
    <button type="button" className="btn btn-primary my-3" onClick={otpverify}>Find Orders</button>
    </div>
    </div>
    </div>
  );}