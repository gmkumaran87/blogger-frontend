import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  console.log(isLoggedIn);
  const handleLogout = async (e) => {
    dispatch(logoutUser());
  };

  const toggleNavbar = (e) => {
    const burger = document.querySelector(".burger");
    const navLink = document.querySelector(".nav-links");
    const link = document.querySelectorAll(".links li");
    navLink.classList.toggle("nav-active");

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
      <div className="logo">
        <NavLink className="link" to="/">
          Simple Blog
        </NavLink>
      </div>
      <div className="nav-links">
        <ul className="links links-center">
          <li>
            <NavLink className="link" to="/">
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
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/write">
              Write
            </NavLink>
          </li>
        </ul>
        <ul className="links links-right">
          {isLoggedIn && (
            <>
              <li>
                <a className="link" href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              {" "}
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
            </>
          )}
        </ul>
      </div>
      <div className="burger" onClick={toggleNavbar}>
        <div className="line1"> </div> <div className="line2"> </div>
        <div className="line3"> </div>
      </div>
    </nav>
  );
};

export default Navbar;
