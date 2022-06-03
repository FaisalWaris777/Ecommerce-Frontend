import NAVBAR from './COMPONENTS/NAV_BAR';
import NAVBAR_1 from './COMPONENTS/NAVBAR_1';
import PRODUCTS_TYPES from './COMPONENTS/PRODUCTS_TYPES'; 
import PRODUCTLIST from './COMPONENTS/PRODUCT_LIST';
import FOOTER from './COMPONENTS/FOOTER';
import React,{useState,useEffect} from 'react';
import CART_ITEMS from './COMPONENTS/CART_ITEMS';
import PAYMENT from './COMPONENTS/PAYMENT_SUCCESS';
import PRODUCT_FOOTER from './COMPONENTS/PRODUCT_FOOTER';
import ADDRESS from './ADDRESS';
import ORDER_MAP from './COMPONENTS/ORDER_MAP';
import ORDER_FIND from './COMPONENTS/ORDER_FIND';
import {Switch, Route,useHistory} from 'react-router-dom';
import './App.css';
import TRACK_ORDER_MAP from './COMPONENTS/TRACK_ORDER_MAP';
import axios from 'axios';

function App() {
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  const history=useHistory(); 

  let [arr_main,setarr_main]=useState([]);
  let [productlist,setproduct]=useState([]);
  let [idate,setidate]=useState();

  useEffect(()=>{
    var date = new Date();
    var ans=date.addDays(4);
    const result= JSON.stringify(ans);
    setidate(result.substring(1,11));

  axios.post('https://ecommerce-web-backend.herokuapp.com//item_list')
.then(res => {setarr_main(res.data);
  setproduct(res.data);})
.catch(err => {
  console.error(err);}) 
  },[])

     let [totalamt,setamt]=useState(0);
     let [cartitem,setcart]=useState([]);
     let [order_arr,setorder]=useState([]);
     let [track,settrack]=useState([]);
     let [order_ID,setorder_ID]=useState();
     let [d_date,setd_date]=useState();

   const ADD=(index,name,price,img,currency)=>
   {let temp=[...cartitem];
    let temp1=[...productlist];
    if(temp1[index].status==="ADD")
    {temp.push({
      name:name,
      price:price,
      quantity:0,
      img:img,
      currency:currency
    });
    temp1[index].status="ADDED TO CART";}
    else {let indx;
      temp.map((products,i)=>{
      if(products.name===name)
      {indx=i;}})
    temp.splice(indx,1);
    temp1[index].status="ADD";
    }
    setproduct(temp1);
    setcart(temp);
   }

   const REMOVE=(index)=>
   {let temp=[...cartitem];
   let total=totalamt;
   total-=temp[index].quantity*temp[index].price;
   temp[index].quantity=0;
   temp.splice(index,1);
   setcart(temp);
   setamt(total);
   }

  const IQ=(index)=>{
  let temp=[...cartitem];
  let total=totalamt;
  temp[index].quantity++;
  total+=temp[index].price;
  setcart(temp);
  setamt(total);
};

  const DQ=(index)=>{
    let temp=[...cartitem];
    let total=totalamt;
    if(temp[index].quantity>0)
    {temp[index].quantity--;
    total-=temp[index].price;}
    setcart(temp);
    setamt(total);
    };

    const Reset=()=>{
    let temp=[...cartitem];
    temp.map((products)=>{products.quantity=0;});
    setproduct(temp);
    setamt(0);
  }

  const reset_home=()=>{
    let arr=[...arr_main];
    setcart([]);
    setproduct(arr);
    setamt(0);
  }
 
  const forder=async (mobile)=>{
    const temp={
     mobile,
   }
  await axios.post('https://ecommerce-web-backend.herokuapp.com//orders',temp)
.then(res => {setorder(res.data);
history.push("/orders");})
.catch(err => {
  console.error(err);}) 
  }

const funct=(id)=>{ 
  order_arr.map((temp,i)=>{
   if(temp.orderID===id)
    {settrack(temp.items);
    setorder_ID(temp.orderID);
      setd_date(temp.d_date);}
  })
}

  const orderID='order_'+new Date().getTime();

 const ERROR=()=>{
  return (<h2>OOPS! THERE IS SOME ERROR</h2>);
};

  return (
    <>
    {/* <div className='nav'>
    <NAVBAR arr={arr_main} setarr={setproduct}/>
    </div> */}
    <Switch>
    <Route exact path="/">
    <div className='nav'>
    <NAVBAR arr={arr_main} setarr={setproduct}/>
    </div>
      <div className='bars_to_one'>
      <div className='sidebar'>
        <PRODUCTS_TYPES arr={arr_main} setarr={setproduct}/>
      </div>
    <div className='product_body'>
    <PRODUCTLIST 
    PL={productlist}
    ADD={ADD}
    /></div></div>
    <div className='product_footer'>
    <PRODUCT_FOOTER/>
    </div></Route>

    <Route exact path="/cart_items">
    <div className='nav'>
    <NAVBAR_1/>
    </div>
    <div className='cart'>
    <div className='cart_body'>
    <div className='head'>
    <h2>SHOPPING CART</h2>
    <h3>Price</h3><h4>(per kg)</h4>
    </div>
    <CART_ITEMS
     list={cartitem}
     IQ={IQ}
    DQ={DQ}
    REMOVE={REMOVE}
     /></div>
     <div className='cart_product'>
    <FOOTER totalamt={totalamt} reset={Reset} list={cartitem}/>
    </div></div>
    </Route>

    <Route exact path="/address">
    <div className='nav'>
    <NAVBAR_1/>
    </div>
    <div className='address_box'>
      <div className='address'>
        <h2>Address Form</h2>
    <ADDRESS totalamt={totalamt} orderID={orderID} list={cartitem} date={idate}/></div></div>
    </Route>
    <Route exact path="/payment_success">
    <div className='nav'>
    <NAVBAR_1/>
    </div>
    <div className='payment'>
    <PAYMENT orderID={orderID} date={idate}/>
    </div></Route>

    <Route exact path="/login">
    <div className='nav'>
    <NAVBAR_1/>
    </div>
    <div className='show_order'>
    <ORDER_FIND forder={forder}/>
    </div></Route>

    <Route exact path="/orders">
    <div className='nav'>
    <NAVBAR_1/>
    </div>
    <div className='t4'>
    <div className='y_orders'>
      <h2>Your Orders</h2>
      </div>
      <div className='t6'>
      <div className='t5'>
      <div className='oid'>
        <h2>Order ID</h2>
      </div>
      <div className='dd'>
        <h2>Delivery Date</h2>
      </div>
      <div className='tamt'>
        <h2>Total Amount</h2>
      </div></div>
    <ORDER_MAP orders={order_arr} funct={funct}/></div>
    </div></Route>

    <Route exact path="/track">
    <div className='nav'>
    <NAVBAR_1/>
    </div>
    <div className='track_order'>
      <div className='detail'>Order Details(<span className='orderid'>{order_ID}</span>)</div>
      {/* <div className="delivery">
      Estimate delivery date : {d_date}
      </div> */}
      <div className='t3'>
      <div className='t1'>
        <div className='p'>Product</div>
        <div className='q'>Quantity</div>
      </div>
      <div className='track'>
    <TRACK_ORDER_MAP track_order={track}/></div></div>
    </div></Route>

    <Route component={ERROR}/>
    </Switch>
    </>

  );
}

export default App;
