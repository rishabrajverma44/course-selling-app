import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../NavBar";
import "./Authorization.css";
import { url } from "../../Backend-url";

function NewSubmit() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr]=useState("")

  const handleSubmit = () => {
    console.log(otp, password);
    axios
      .post(url+"/submit-otp", {
        otp: otp,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          navigate("/signin");
          setErr("New Password Updated !")
          alert("Password Updated.");
        } else {
          setErr("Wrong OTP Try again !")
          alert("server err / wrong OTP");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavBar />
      <div className="start bg-black" style={{ height: "90px" }}>welcome</div>
      <div className="outcard">
        <h1 className="center"> FORGET PASSWORD </h1>
        <h3 style={{textAlign:'center',color:'red', fontSize:'25px'}}>{err}</h3>
        OTP
        <input
          style={{ marginBottom: "15px" }}
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          value={otp}
          className="inputs"
          type="text"
          placeholder="Enter your OTP"
        />
        Enter New Password
        <input
          style={{ marginBottom: "20px" }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="inputs"
          type="password"
          placeholder="Enter your new password"
        />
        <div className="container-btn">
          <button onClick={handleSubmit} className="btns">
          CHANGE PASSWORD
          </button>
        </div>
        
        <div className="container-btn">
            <button onClick={handleSubmit} className="btns x">
              <Link to={"/signup"}>SIGN UP</Link>
            </button>
          </div>
      </div>
    </>
  );
}

export default NewSubmit;
