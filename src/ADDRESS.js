import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
let rr=0;

export default function ADDRESS(props) { 
  const history=useHistory(); 

  const funct=()=>{
    if(rr===1){rr=0;}
    else{rr=1;}
  }

  // Date.prototype.addDays = function(days) {
  //   var date = new Date(this.valueOf());
  //   date.setDate(date.getDate() + days);
  //   return date;
  // }

  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

async function displayRazorpay(temp) {
  const {
    yname,
    house,
    locality,
    pincode,
    phone,
    }=temp;
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const result = await axios.post("https://ecommerce-web-backend.herokuapp.com//payment",temp);

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_zotXtENdy5l3Ik", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "ORGCARY PAYMENT PAGE",
        description: "Test Transaction",
        //image: { logo },
        order_id: order_id,
        handler: async function (response) {
          history.push("/payment_success");

           // const result = await axios.post("https://ecommerce-web-backend.herokuapp.com//payment/success", data);
             axios.post('https://ecommerce-web-backend.herokuapp.com//address',temp).then((res) => {
             console.log("DATA SENT");})
            .catch(err => {
            console.error(err);});
            //alert(result.data.msg);

        },
        prefill: {
            name: yname,
            //email: "SoumyaDey@example.com",
            contact: phone,
        },
        // notes: {
        //     address: "Soumya Dey Corporate Office",
        // },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
     paymentObject.open();
} 


var amount=props.totalamt;

const [input,setinput]= useState({
yname:"",
house:"",
locality:"",
pincode:"",
phone:"",
});

let name,value;
const handleInputs=(e)=>{
name=e.target.name;
value=e.target.value;
var b=0;

if(name==='yname')
{const re = /^[A-Za-z\s]+$/;
  if (value===''||re.test(e.target.value)){
    b=1;}
    else{alert("only characters allowed")}
    }

else if(name==='pincode'||name==='phone'){
  const re = /^[0-9]+$/;
  if (value===''||re.test(e.target.value)){
b=1;}
else{alert("only Digits are allowed")}}

else{b=1;}

if(b===1){
setinput({...input,[name]:value});}
};


const postreq= async (e)=>{
const orderID=props.orderID;
const list=props.list;
const d_date= props.date;
const {yname,house,locality,pincode,phone}=input;
var mn=0;
if(phone.length===10)
{mn=1;}
if(yname!=''&& house!=''&& locality!=''&& pincode!=''){
  if (mn===1){
e.preventDefault();
const temp={
yname,
house,
locality,
pincode,
phone,
amount,
orderID,
list,
d_date
};
if(rr===1){
await displayRazorpay(temp);}
else{axios
  .post('https://ecommerce-web-backend.herokuapp.com//address',temp)
  .then(() => console.log('DATA SENT'))
  .catch(err => {
    console.error(err);
  });
  history.push("/payment_success");
}}
else{
  if(mn===0){alert("MOBILE NUMBER SHOULD BE OF 10 DIGIT")}
}
}
 else{alert("ANY FIELD CANNOT BE EMPTY")}
};

  return(
    <>
    <form method="POST">
        <div className="form-group">
          <input type="text" name="yname" className="form-control"  
          id="exampleInputEmail1" aria-describedby="emailHelp"
          value={input.yname}
          onChange={handleInputs}
          placeholder="Enter Your Name" required/>
        </div>
        <div className="form-group">
          <input type="text" name="house" className="form-control" 
           id="exampleInputPassword1"
           value={input.house} 
           onChange={handleInputs} 
           placeholder="Enter House / Floor Number" />
        </div>
        <div className="form-group">
          <input type="text" name="locality" className="form-control" 
           id="exampleInputPassword1"
           value={input.locality}
           onChange={handleInputs} 
           placeholder="Enter Locality" />
        </div>
        <div className="form-group">
          <input type="text" name="pincode" className="form-control" 
           id="exampleInputPassword1"
           value={input.pincode} 
           onChange={handleInputs} 
           placeholder="Enter Pincode" />
        </div>
        <div className="form-group">
          <input type="text" name="phone" className="form-control" 
           id="exampleInputPassword1"
           value={input.phone} 
           onChange={handleInputs} 
           placeholder="Enter Mobile Number" />
        </div>
        <div className='radio_btn'>
        <fieldset>
        <legend>Mode of payment:</legend>
        <label class="label1">Cash on delivery  
        <input type="radio" name="cash" className='r1' onChange={funct} checked/></label>
        <label class="label2">Online
        <input type="radio" name="cash" className='r2' onChange={funct}/></label>
        </fieldset>
        </div>

      {<button type="button" className="btn btn-primary my-3" onClick={postreq}>PAY</button> }
      </form>
     </> 
  );
}
