import React from "react";
import { useState } from "react";
import CartContext from "./Cart";
const CartContextProvide =({children})=>{
    const [cart,setcart]=useState([])
    return(
        <CartContext.Provider value={{cart,setcart}}>
            {children}
        </CartContext.Provider>

    );
}
export default CartContextProvide;