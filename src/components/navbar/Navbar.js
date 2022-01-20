import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const toggleNavbar = (e) => {
    const burger = document.querySelector(".burger");
    const navLink = document.querySelector(".nav-links");
    const link = document.querySelectorAll(".nav-links li");
    navLink.classList.toggle("nav-active");

    console.log(link);
    link.forEach((e, index) => {
      if (e.style.animation) {
        e.style.animation = "";
      } else {
        e.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
        console.log(index / 5 + 2.3);
      }
    });

    burger.classList.toggle("toggle");
  };
  return (
    <nav>
      <div className="logo">Simple Blog</div>
      <ul className="nav-links">
        <li>
          <NavLink className="link" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
      <div className="burger" onClick={toggleNavbar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
