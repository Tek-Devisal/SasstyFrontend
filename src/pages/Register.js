import React from "react";
import cart from "../assets/cart.svg";
import google from "../assets/google.svg";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
const Register = () => {
  const [display, setDisplay] = useState(<Signup />);

  return (
    <div className="register_container">
      <div className="card border-0 login_height shadow-lg">
        <div className="row d_small_screen">
          <div className="col-sm-8 d-sm-block d-none left">
            <h1 className="text-center  text">Welcome to sassty</h1>
            <img src={cart} alt="" width={600} className="cart" />
          </div>
          <div className="col-sm-4 right">
            {/* <div className="line"></div> */}
            <div className="btns text-center mt-5">
              <button className="signup" onClick={() => setDisplay(<Signup />)}>
                sign up
              </button>
              <button className="signin" onClick={() => setDisplay(<Login />)}>
                sign in
              </button>
              {display}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
