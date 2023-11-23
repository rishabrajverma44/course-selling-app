import React from "react";
import "./css/HomePage.css"
import NavBar from "../NavBar";
import OtherHomePage from "./OtherHome"

const HomeNavBar = () => {
  return (
    <>
      <NavBar></NavBar>
      <OtherHomePage/>
    </>
  );
};

export default HomeNavBar;
