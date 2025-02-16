import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import CartContextProvide from "../Context/CartContext";

function Layout() {
  return (
    <>
      <CartContextProvide>
        <Header />
        <Outlet />
      </CartContextProvide\>
    </>
  );
}

export default Layout;
