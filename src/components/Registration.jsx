import React from "react";
import { useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { BASE_URL } from "../pages/Home";
import axios from "axios";

const RegistrationSignup = () => {
  const [show, setShow] = useState(false);
  const [warnig, setWarnig] = useState()
  const [username, setUsername] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };


  const signUp = (e) => {
    e.preventDefault()
    if(!(email && password)){
        setWarnig("All fields are required")
    }
    
    else{
          const options = {
            url: `${BASE_URL}/users/v1/register/`,
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                username: username,
                first_name: firstname,
                last_name: lastname,
                password: password,
                email: email
            }
          };

            navigate("/login")
            window.location.reload();
            console.log("User successfully logged in")
        
            axios(options)
              .then(response => {
              console.log(response.status);
              });

          }
    }

  return (
    <>
    {/* <Navbar /> */}
    <div>
      {/* <div className="text-center d-flex align-items-center justify-content-center gift_text">
        <RedeemOutlinedIcon className="mx-1" style={{ fontSize: "1rem" }} />
        FREE gifts and $4 Allowance are waiting for you
      </div> */}
      <form action="" onSubmit={signUp} className="form">
        <div className="form_control">
          <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username" />
        </div>
        <div className="form_control">
          <input type="text" onChange={(e)=>{setFirstname(e.target.value)}} placeholder="First Name" />
        </div>
        <div className="form_control">
          <input type="text" onChange={(e)=>{setLastname(e.target.value)}} placeholder="Last Name" />
        </div>
        
        <div className="form_control">
          <input type={show ? "text" : "password"} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
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
        <div className="form_control">
          <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
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
          <input type="checkbox" name="check2" id="check2" className="check" />
          <label htmlFor="check2" className="small_text">
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
    </>
  );
};

export default RegistrationSignup;
