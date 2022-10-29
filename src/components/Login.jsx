import React from "react";
import { VisibilityOffOutlined } from "@mui/icons-material";

const Login = () => {
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
      <div className="gray_text mt-2">Forgot your password?</div>
      <div className="text-center text_center mt-2">Quick Access With</div>
    </div>
  );
};

export default Login;
