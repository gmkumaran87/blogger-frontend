import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import { uiActions } from "../../../store/ui-slice";
import { useNavigate } from "react-router-dom";
import "../Form.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, status, isLoading } = useSelector((state) => state.ui);

  const initialState = {
    username: "",
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(state);

    dispatch(registerUser(state));

    // Setting the form to NULL
    setState((pre) => ({ ...pre, username: "", email: "", password: "" }));

    setTimeout(() => {
      console.log("Inside timeOut");
      dispatch(
        uiActions.showNotification({
          message: "",
        })
      );
    }, 5000);
    // navigate("/activate-account");
  };
  return (
    <div className="form-center register">
      {message && (
        <div
          className={
            status === "success"
              ? "form-msg alert-success"
              : "form-msg alert-danger"
          }
        >
          {message}
        </div>
      )}
      <h2 className="form-title"> Regiter Yourself </h2>{" "}
      <form className=" form register-form" onSubmit={handleRegister}>
        <div className="form-control">
          <label htmlFor="username"> Username </label>{" "}
          <input
            type="text"
            name="username"
            required
            value={state.username}
            onChange={(e) =>
              setState((pre) => ({ ...pre, username: e.target.value }))
            }
          />{" "}
        </div>{" "}
        <div className="form-control">
          <label htmlFor="email"> Email </label>{" "}
          <input
            type="text"
            name="email"
            required
            value={state.email}
            onChange={(e) =>
              setState((pre) => ({ ...pre, email: e.target.value }))
            }
          />{" "}
        </div>{" "}
        <div className="form-control">
          <label htmlFor="password"> password </label>{" "}
          <input
            type="password"
            name="password"
            required
            value={state.password}
            onChange={(e) =>
              setState((pre) => ({ ...pre, password: e.target.value }))
            }
          />{" "}
        </div>{" "}
        <button className="btn register-btn"> Register </button>{" "}
      </form>{" "}
    </div>
  );
};

export default Register;
