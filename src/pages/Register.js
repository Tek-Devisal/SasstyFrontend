import React from "react";
import Navbar from "../components/Navbar";

import Email from "@mui/icons-material/EmailOutlined";
import Lock from "@mui/icons-material/LockOutlined";
import { Link } from "@mui/material/node";
import google from "../assets/google.svg";

const Register = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="login_container">
        <form
          action=""
          className="card rounded-0 border-0 shadow-lg p-3 form_container"
        >
          <div className="mx-auto mb-2">
            <img src="/Images/sasstylogo.jpeg" alt="" width={50} />
            <h6 className="text-center login_text">Login</h6>
          </div>
          <div className="form_control">
            <Email
              style={{
                fontSize: "12px",
                color: "#6F6A6A",
                marginTop: "0.45rem",
              }}
            />
            <input
              type="text"
              name="name"
              className="border-0"
              placeholder="Email addresss"
            />
          </div>
          <div className="form_control mt-3">
            <Lock
              style={{
                fontSize: "12px",
                color: "#6F6A6A",
                marginTop: "0.45rem",
              }}
            />
            <input
              type="text"
              name="name"
              className="border-0"
              placeholder="Password"
            />
          </div>
          <div className="d-flex mt-3 justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <input type="checkbox" name="checkbox" width={15} />
              <label htmlFor="" className="small_text mx-1">
                Remeber Me
              </label>
            </div>
            <Link href="" className="small_text text-decoration-none">
              Forgotten Password
            </Link>
          </div>
          <button type="submit" className="btn_signin mt-3 mb-2">
            Sign In
          </button>
          <button className="btn_signin bg-dark">
            <img src={google} alt="" width={15} className="mx-2" /> Continue
            with Google
          </button>
          <div className="text-center small_text mt-2">
            Don't have an account?{" "}
            <Link href="" className="text-decoration-none">
              sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
