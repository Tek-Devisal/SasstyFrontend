import React from "react";
import { VisibilityOffOutlined } from "@mui/icons-material";

const Signup = () => {
  return (
    <div>
      <div className="form_control">
        <input type="text" placeholder="email" />
      </div>
      <div className="form_control my-2">
        <input type="text" placeholder="email" />
        <VisibilityOffOutlined
          className="icon"
          width={10}
          style={{ fontSize: "12px" }}
        />
      </div>
      <input type="submit" className="submit_btn" />
      <div className="gray_text mt-2 d-flex">
        <input type="checkbox" />
        <span className="mx-1">I agree to terms of use</span>
      </div>
      <div className="gray_text mt-1 d-flex">
        <input type="checkbox" />
        <span className="mx-1">I agree to privacy of use</span>
      </div>
      <div className="text-center text_center mt-2">Quick Access With</div>
    </div>
  );
};

export default Signup;
