import React from "react";
import NavigationBar from "../navbar/NavigationBar";
import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import "./applayOut.css";

const AppLayout = () => {
  return (
    <div className="layout-wrapper">
      <NavigationBar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
