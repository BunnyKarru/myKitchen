import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import IdContextProvide from "../Context/IdContextProvider";

function Layout() {
  return (
    <>
      <IdContextProvide>
        <Header />
        <Outlet />
      </IdContextProvide>
    </>
  );
}

export default Layout;
