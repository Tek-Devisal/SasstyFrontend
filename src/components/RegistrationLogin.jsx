import React,{ useState, useContext } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import jwt_decode from 'jwt-decode'
import { BASE_URL } from "../pages/Home";
import { UserContext } from "../ContextAPI/UserContext";


const RegistrationLogin = () => {

  const [show, setShow] = useState(false);
  const [warnig, setWarnig] = useState()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const {userInfo, setUserInfo, setAuthTokens} = useContext(UserContext)

  const handleClick = () => {
    setShow(!show);
  };

  console.log(userInfo);

  const signIn = (e) => {
    e.preventDefault()
    if(!(email && password)){
        setWarnig("All fields are required")
    }
    
    else{
        try {
            const config = {
                headers: {"Content-Type": "application/json"},
               
            };
            axios.post(`${BASE_URL}/users/v1/api/token/` ,{username: email, password: password}, config)
            .then(res => {
                console.log(res.data)
                console.log(res);
                // localStorage.setItem("user info", JSON.stringify(res.data))

 
                  if(res.status==200){
                    console.log("User successfully logged in")
                    setAuthTokens(res.data);
                    setUserInfo(jwt_decode(res.data.access));
                    localStorage.setItem('authTokens', JSON.stringify(res.data))
                    navigate("/")
                    // window.location.reload();
              }
            })
           
            

              }
            catch (error) {
            console.log(error)
            }
          }
    }

  return (
    <div>
      <form action="" onSubmit={signIn} className="form">
        <div className="form_control">
          <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
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
        <input
          type="submit"
          className="d-block w-100 border-0 submit text-white"
          value="Sign in"
        />
      </form>
      <p>{warnig}</p>
      <Link to="" className="forgotten">
        Forgot your password?
      </Link>
    </div>
  );
};

export default RegistrationLogin;
