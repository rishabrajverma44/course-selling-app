import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import "./Authorization.css";
import { url } from "../../Backend-url";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");



  const handleSubmit = () => {
    

    axios
      .post(url+"/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.code === 500) {
          setErr("User NOT registred !")
        }
        if (res.data.code === 404) {
          setErr("Password is Wrong !");
        }
        if (res.data.code === 200) {
          // move to home
          navigate("/home");
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("EMAIL", res.data.email);
          localStorage.setItem("NAME", res.data.name);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.message = 'Network Error') {
          console.log("Turn on BACKEND server");
          setErr("Please Turn on BACKEND server...");
        }
      });



  };

  return (
    <>
      <NavBar />

      <div className="start" style={{ height: "90px" }}>welcome</div>
      <div className="main-container">
      <div className="circle">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        <div className="outcard">
          <h1 className="center">Signin for Course</h1>
          <h3 style={{ textAlign: 'center', color: 'red', fontSize: '25px' }}>{err}</h3>
          <span>Email</span>
          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="inputs"
            type="email"
            placeholder="Enter your password"
          />{" "}
          <br /> <br />
          <span>Enter Your Password</span>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="inputs"
            type="password"
            placeholder="Enter Password"
          />
          <br /> <br />
          <div className="container-btn">
            <button onClick={handleSubmit} className="btns">
              SUBMIT
            </button>
          </div>

          <div className="container-btn">
            <button onClick={handleSubmit} className="btns x">
              <Link to={"/signup"}>SIGN UP</Link>
            </button>
          </div>
          <div className="container-btn">
            <button onClick={handleSubmit} className="btns x">
              <Link to={"/forget-pass"}>Forget Password</Link>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Signin;
