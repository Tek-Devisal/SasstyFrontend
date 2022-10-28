import React from "react";
import Navbar from "../components/Navbar";

import Email from "@mui/icons-material/EmailOutlined";
import Lock from "@mui/icons-material/LockOutlined";
import { VisibilityOffOutlined } from "@mui/icons-material";
import { Link } from "@mui/material/node";
import google from "../assets/google.svg";
import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Register = () => {
  const [display, setDisplay] = useState(<Login />);

  return (
    //
    <div>
      <div className="login_container">
        <div className="form_container card py-4 px-3">
          <div className="d-flex justify-content-around mb-3">
            <button
              className="register_btn underline"
              onClick={() => setDisplay(<Login />)}
            >
              sign in
            </button>
            <button
              className="register_btn"
              onClick={() => setDisplay(<Signup />)}
            >
              register
            </button>
          </div>
          {display}
        </div>
      </div>
    </div>
  );
};

export default Register;
