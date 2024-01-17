import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../NavBar";
import "./Authorization.css";
import { url } from "../../Backend-url";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [err, setErr]=useState("");

  const validateForm = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(email);
      axios
        .post(url+"/send-otp", {
          email: email,
        })
        .then((res) => {
          if (res.data.code === 200) {
            alert("OTP set to your gmail")
            setErr("otp sent")
            navigate("/otp");
          } else if (res.data.code === 404) {
            setErr("Email is not registerd !");
          } else {
            alert("Email / Server Error.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <NavBar />
      <div className="start bg-black" style={{height:"90px"}}>welcome</div>
      <div className="outcard">
        <h1 className="center"> Forget Password</h1>
        <h3 style={{textAlign:'center',color:'red', fontSize:'25px'}}>{err}</h3>
        Email <br />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="inputs"
          type="text"
          placeholder="enter your email"
        />{" "}
        {errors.email && <div className="error">{errors.email}</div>} <br />{" "}
        <br />
        <div className="container-btn">
          <button onClick={handleSubmit} className="btns">
            SEND OTP
          </button>
        </div>
       
        <div className="container-btn">
          <button onClick={handleSubmit} className="btns x">
          <Link to={"/signup"}>SIGN UP</Link>
          </button>
        </div>
        <div className="container-btn">
          <button onClick={handleSubmit} className="btns x">
          <Link to={"/signin"}>SINGIN</Link>
          </button>
        </div>
      
      </div>
    </>
  );
}

export default ForgetPassword;
