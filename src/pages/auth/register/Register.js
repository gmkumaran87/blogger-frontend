import React, { useEffect, useState } from "react";
import "../Form.css";

const Register = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-center register">
      <div className="form-msg"></div>
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
            type="text"
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
