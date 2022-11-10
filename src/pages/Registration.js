import React from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";
import apple from "../assets/apple.svg";
import { useState } from "react";
import RegistrationLogin from "../components/RegistrationLogin";
import RegistrationSignup from "../components/Registration";
const Registration = () => {
  const [show, setShow] = useState(false);
  const [focus1, setFocus1] = useState(true);
  const [focus2, setFocus2] = useState(false);
  const [display, setDisplay] = useState(<RegistrationLogin />);
  const handleClick = () => {
    setShow(!show);
  };
  const handleFocus1 = () => {
    setFocus1(true);
    setFocus2(false);
  };
  const handleFocus2 = () => {
    setFocus1(false);
    setFocus2(true);
  };

  let className = "buttons";

  return (
    <div className="register_container">
      <div className="card border-0 login_height shadow-lg">
        <div className="d-flex justify-content-around align-items-center button_group">
          <button
            onFocus={handleFocus1}
            className={focus1 ? className.concat("  btn_underline") : "buttons"}
            onClick={() => {
              setDisplay(<RegistrationLogin />);
            }}
          >
            Sign in
          </button>
          <button
            onFocus={handleFocus2}
            className={focus2 ? className.concat(" btn_underline") : "buttons"}
            onClick={() => {
              setDisplay(<RegistrationSignup />);
            }}
          >
            Register
          </button>
        </div>
        {display}
        <h1 className="text-center access">Quick Access With</h1>

        <div className="d-flex justify-content-around align-items-center">
          <div className="rounded-circle bg-dark">
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
