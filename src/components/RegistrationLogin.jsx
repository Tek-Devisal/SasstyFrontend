import React from "react";
import { useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";
const RegistrationLogin = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
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
        <input
          type="submit"
          className="d-block w-100 border-0 submit text-white"
          value="Sign in"
        />
      </form>
      <Link to="" className="forgotten">
        Forgot your password?
      </Link>
    </div>
  );
};

export default RegistrationLogin;
