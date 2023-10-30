import React from "react";
import { BsCartPlus } from "react-icons/bs";

function CartItem({ product,handleDeleteCart }) {
  return (
    <div className="Maindiv">
      <img src={`${product.image}`} alt={product.name} />
      <h3 style={{ textDecorationColor: "white" }}>
        <p>{product.name}</p>
      </h3>
      <h3>
        <p> ₹{product.price}</p>
      </h3>
      <div className="Buttons">
        <button onClick={()=>handleDeleteCart(product)} >
          
          <BsCartPlus /> Delete Item 
        </button>
      </div>
    </div>
  );
}

export default CartItem;
