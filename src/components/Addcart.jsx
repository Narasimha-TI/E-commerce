import React, { useEffect, useState } from "react";

import CartItem from "./CartItem";

function Addcart({handleCartCountChange}) {
  const [cart, setCart] = useState([]);
   const totalPrice=cart?.reduce((acc,item)=>acc + +item.price,0)


   const handleDeleteCart=async(product)=>{
    const currentCart=await JSON.parse(localStorage.getItem("cart")) || [];
    const remainCart=currentCart.filter((item)=>item.id!==product.id)
     localStorage.setItem("cart",JSON.stringify(remainCart))
     setCart(remainCart)
     handleCartCountChange("DEC")
  }
   const getCartData=async()=>{
    const data = await JSON.parse(localStorage.getItem("cart")) ||[];
    setCart(data)
   }
  useEffect(() => {
    getCartData()
  }, []);
  
  return (
   <div style={{padding:"20px"}}>
    <h1> Total Price : ₹ {totalPrice} /- </h1>

    <br/>

     <div style={{height:"50vh",width:"100vw",display:"grid",gridTemplateColumns:"repeat(4,1fr)",textAlign:"center"}}>{cart.length > 0 ? cart.map((item) => (
      <CartItem handleDeleteCart={handleDeleteCart} key={item.id} product={item}/>
    )) : null}</div>
   </div>
  );
}

export default Addcart;
