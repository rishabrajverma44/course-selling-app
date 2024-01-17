import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DashBoard.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      navigate("/signin");
    }
    
  }, []);

  // Sidebar toggling state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const email=localStorage.getItem("EMAIL");
  const [name, setName] = useState(localStorage.getItem("NAME"));
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});



  const validateForm = () => {
    let newErrors = {};
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile must be a 10-digit number";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await axios
      .post("http://localhost:5000/profileupdate", {
        name:name,
        email: email,
        password: password,
        mobile:mobile,
      })
      .then((res) => {
        if (res.data.code === 500) {
          alert("User Not Found");
        }
        if (res.data.code === 404) {
          alert("Password is wrong");
        }
        if (res.data.code === 200) {
          alert("Your Profile Updated")
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("NAME", res.data.name);
          localStorage.setItem("MOBILE",res.data.mobile);
          localStorage.setItem("EMAIL",res.data.email);
          
        }else{
          console.log("invalid response");
        }
      })
      .catch((err) => {
        console.log(err);
      });

     

    } else {
      console.log("form is not validated...")
    }
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* Your existing dashboard content */}

      {/* Toggling Sidebar Component */}
      <div className="main-wrap">
        <input
          id="slide-sidebar"
          type="checkbox"
          role="button"
          checked={sidebarOpen}
          onChange={toggleSidebar}
        />
        <label htmlFor="slide-sidebar">
          <span className="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list-task"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
              />
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
              <path
                fill-rule="evenodd"
                d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
              />
            </svg>
          </span>
        </label>
        <div className="sidebar">
          <h2>DASHBOARD</h2>
          <ul>
            <li>
              <Link to="/home/dashboard">Dash-Board</Link>
            </li>
            <li>
              <Link to="/home">My Payments</Link>
            </li>
            <li>
              <Link to="/home/dashboard/profile">Profile</Link>
            </li>
          </ul>

          <div className="logout_profile">
            <div className="photo"></div>
            {name},<i class="bx bx-log-out"></i>
            <button
              className="btn-primary logoutbtn"
              onClick={() => {
                localStorage.clear();
                navigate("/signin");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="content">
          <div
            style={{
              color: "green",
              marginLeft: "-20px",
              height: "80px",
              backgroundColor: "black",
            }}
          >
            <h1 style={{ marginLeft: "150px" }}>Welcome to DashBoard</h1>
          </div>

          <h1>PROFILE</h1>

          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://gahanacademy.gahanai.co.in/assets/images/profile_images/default-user0.png"
                      alt="user"
                      class="rounded-circle"
                      width="150"
                    />
                    <div class="mt-3">
                      <h4>{name}</h4>
                      <form action="#" method="post" id="frm-chng-pic"></form>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="container col-md-6">
              <div class="card mb-3">
                <div class="card-body ">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Name<br/>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={`inputs`}
                        type="text"
                      />
                      <br></br>
            
                    </div>
                  </div>



                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      mobile<br/>
                      <input
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                        className={`inputs ${
                          errors.mobile ? "is-invalid" : ""
                        }`}
                        type="number"
                      />
                      {errors.mobile && (
                        <div className="error">{errors.mobile}</div>
                      )}
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Password</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Enter your current valid Password <br />
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className={`inputs ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        type="password"
                      />
                      <br></br>
                      {errors.password && (
                        <div className="error">{errors.password}</div>
                      )}
                    </div>
                  </div>

                  <div class="row">
                    
                    
                    <div className="col-sm-3">
                    <button onClick={handleSubmit} className="update">
                        SUBMIT
                      </button>
                    </div>
                    <br /><br /><br /><br />
                  </div>

                </div>
              </div>
            </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
