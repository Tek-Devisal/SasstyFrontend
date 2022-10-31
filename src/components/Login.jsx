import React from "react";
import cart from "../assets/cart.svg";
import google from "../assets/google.svg";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";

const Login = () => {
  const [isView, setIsView] = useState(false);
  const handleClick = () => {
    setIsView(!isView);
  };
  return (
    <>
      <div className="header">
        <h3 className="mb-3">Login with your account</h3>
        {/* <p>Lorem, ipsum dolor.</p> */}
      </div>
      <form action="" className="form d-flex flex-column">
        <div className="form_control d-flex justify-content-center align-items-center">
          <input type="text" placeholder="username" />
        </div>

        <div className="form_control d-flex justify-content-center align-items-center">
          <input type={isView ? "text" : "password"} placeholder="Password" />
          {isView ? (
            <VisibilityOutlinedIcon
              style={{ fontSize: "12px" }}
              className="icons"
              onClick={handleClick}
            />
          ) : (
            <VisibilityOffOutlinedIcon
              style={{ fontSize: "12px" }}
              className="icons"
              onClick={handleClick}
            />
          )}
        </div>

        <input type="submit" className="submit" value="Sign up" />
        <div className="d-flex mt-2 align-items-center justify-content-center">
          <div className="line"></div>
          <div className="small_text">OR</div>
          <div className="line"></div>
        </div>
        <button className="submit google_btn">
          <img src={google} alt="" width={10} className="mx-1" />
          Continue with google
        </button>
      </form>
    </>
  );
};

export default Login;
