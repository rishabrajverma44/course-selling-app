import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "./image/Gahan_Academy 1.png";
import "./NavBar.css";

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    
      <header>
        <div>
          <Link to="/">
            <img src={img} alt="gahan-ai_logo" className="logo" />
          </Link>
        </div>
        <nav ref={navRef}>
          <Link to="/otherhome">HOME</Link>
          <Link to="/courses">COURSES</Link>
          <Link to="/pricing">PRICING</Link>
          <Link to="/signin">SIGNIN/LOG-IN</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    
  );
};

export default NavBar;
