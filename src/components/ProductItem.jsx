import React from "react";
import { BsCartPlus } from "react-icons/bs";
import Swal from "sweetalert2";


function ProductItem({ product,handleCartCountChange }) {
  const handleAddToCart = async(product) => {
    const prevCart = await JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist=prevCart.filter((item)=>item.id===product.id)
    console.log(isProductExist)
    if(isProductExist.length){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Product already in cart',
        showConfirmButton: false,
        timer: 1000
      })
      return;
    }
    let newCartValue = [...prevCart, product];
    localStorage.setItem("cart", JSON.stringify(newCartValue));
     handleCartCountChange("INC")
  };

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
        <button onClick={() => handleAddToCart(product)}>
          {" "}
          <BsCartPlus /> Add to Cart{" "}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
