import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  // const { message, status } = useSelector((state) => state.ui);

  console.log("Iniital value", isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/users");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authActions.login({ isLoggedIn: true, isNavBar: false }));
  };
  return (
    <div className="login">
      <div className="form-msg"></div>
      <h2 className="loginTitle"> Please Login </h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor=""> Email </label>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password"> Password </label>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn"> Submit </button>
        <span className="forgot-password"> Forgot Password ? </span>
      </form>
    </div>
  );
};

export default Login;
