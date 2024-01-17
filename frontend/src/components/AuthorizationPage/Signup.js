import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import "./Authorization.css";
import { url } from "../../Backend-url";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [signup, setSignup] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (/\s+$/.test(name)) {
      newErrors.name = "Name should not end with a space";
    } if (!name || name.trim().length < 3) {
      newErrors.name = "Name must contain at least three characters";
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile must be a 10-digit number";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(url+"/signup", {
          email: email,
          password: password,
          name: name,
          mobile: mobile,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            setEmail("");
            setPassword("");
            setName("");
            setMobile("");
            setSignup("Please check your mail for verification...");
          }if(res.data.code === 500){
           setEmail("Please check your mail for verification");
          }
           else {
            alert("Error.");
            setEmail("");
            setPassword("");
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
      <div className="start bg-black" style={{ height: "90px" }}>welcome</div>
      <div className="main-container">
        <div className="circle">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        <div className="outcard">
          {<h3 className="signup">{signup}</h3>}
          <h1 className="center">Signup for Course</h1>
          <span>NAME</span><br />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={`inputs ${errors.name ? "is-invalid" : ""}`}
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && <div className="error">{errors.name}</div>}
          <span>MOBILE</span><br />
          <input
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            className={`inputs ${errors.mobile ? "is-invalid" : ""}`}
            type="number"
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <div className="error">{errors.mobile}</div>}
          <span>EMAIL</span><br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`inputs ${errors.email ? "is-invalid" : ""}`}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <span>PASSWORD</span> <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={`inputs ${errors.password ? "is-invalid" : ""}`}
            type="password"
            placeholder="Password"
          />
          <br></br>
          {errors.password && <div className="error">{errors.password}</div>}
          <br></br>


          <div className="container-btn">
            <button onClick={handleSubmit} className="btns">
              SUBMIT
            </button>
          </div>


          <div className="container-btn">
            <button onClick={handleSubmit} className="btns x">
              <Link to={"/signin"}>SIGN IN</Link>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Signup;
