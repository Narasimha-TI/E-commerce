import "./App.css";
import Header from "./components/Header";
import ProudctList from "./components/ProductList";
import Addcart from "./components/Addcart";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [cartCount,setCartCount]=useState(0)
  const getCartCount=async()=>{
  const res=await JSON.parse(localStorage.getItem("cart")) ||[]
  setCartCount(res.length)
  }

useEffect(()=>{
  getCartCount()
},[])


  const handleCartCountChange=(value)=>{
    const finalValue=value==="INC" ?1:-1
  setCartCount((prev)=>prev+finalValue)
  }
  
  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<ProudctList handleCartCountChange={handleCartCountChange} />}></Route>
        <Route path="/cart" element={<Addcart handleCartCountChange={handleCartCountChange} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
