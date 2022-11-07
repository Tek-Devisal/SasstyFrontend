import React from "react";
import { useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import { Link } from "react-router-dom";
const RegistrationSignup = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="text-center d-flex align-items-center justify-content-center gift_text">
        <RedeemOutlinedIcon className="mx-1" style={{ fontSize: "1rem" }} />
        FREE gifts and $4 Allowance are waiting for you
      </div>
      <form action="" className="form">
        <div className="form_control">
          <input type="text" placeholder="Email" />
        </div>
        <div className="form_control">
          <input type={show ? "text" : "password"} placeholder="Password" />
          {show ? (
            <VisibilityOutlinedIcon
              className="eyeicon"
              style={{ fontSize: "1.2rem" }}
              onClick={handleClick}
            />
          ) : (
            <VisibilityOffOutlinedIcon
              className="eyeicon"
              style={{ fontSize: "1.2rem" }}
              onClick={handleClick}
            />
          )}
        </div>
        <div className="d-flex align-items-center">
          <input type="checkbox" name="check1" id="check1" className="check" />
          <label htmlFor="check1" className="small_text">
            I agree to{" "}
            <Link to="" className="small_text">
              Terms of use
            </Link>
          </label>
        </div>
        <div className="d-flex align-items-center mt-1">
          <input type="checkbox" name="check1" id="check1" className="check" />
          <label htmlFor="check1" className="small_text">
            I agree to{" "}
            <Link to="" className="small_text">
              Privacy policy
            </Link>
          </label>
        </div>
        <input
          type="submit"
          className="d-block w-100 border-0 submit text-white"
          value="Create your account"
        />
      </form>
    </div>
  );
};

export default RegistrationSignup;
