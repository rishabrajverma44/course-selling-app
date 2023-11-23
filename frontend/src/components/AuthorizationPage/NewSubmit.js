import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../NavBar";
import "./Authorization.css";

function NewSubmit() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr]=useState("")

  const handleSubmit = () => {
    console.log(otp, password);
    axios
      .post("http://course-selling.ap-south-1.elasticbeanstalk.com/submit-otp", {
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
          placeholder="enter OTP"
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
          placeholder="enter your new password"
        />
        <button onClick={handleSubmit} className="btns">
          {" "}
          CHANGE PASSWORD{" "}
        </button>
        <Link
          style={{
            textAlign: "center",
            display: "block",
            marginTop: "5px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          to={"/signup"}
        >
          {" "}
          SIGN UP{" "}
        </Link>
      </div>
    </>
  );
}

export default NewSubmit;
