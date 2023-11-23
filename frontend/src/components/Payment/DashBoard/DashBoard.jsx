import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DashBoard.css";
import { Link } from "react-router-dom";


const Dashboard = (data) => {
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

  return (
    <div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <div className="main-wrap">
        <input id="slide-sidebar" type="checkbox" role="button" checked={sidebarOpen} onChange={toggleSidebar} />
        <label htmlFor="slide-sidebar">
          <span className="toggle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
  <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
</svg></span>
        </label>
        <div className="sidebar">
          <h2>DASHBOARD</h2>
          <ul>
            <li><Link to="/home/dashboard">Dash-Board</Link></li>
            <li><Link to="/home">My Payments</Link></li>
            <li><Link to="/home/dashboard/profile">Profile</Link></li>
          </ul>

          <div className="logout_profile"><div className="photo">
          </div>{localStorage.getItem("NAME")},
          
          <i class="bx bx-log-out"></i>
          <button
            className="btn-primary logoutbtn"
            onClick={() => {
              localStorage.clear();
              navigate("/signin");
            }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
          </button>
        </div>
        </div>
        <div className="content">
          <div style={{ color: "green", marginLeft: "-20px", height: "80px", backgroundColor: "black" }}>
            
            <h1 style={{marginLeft: "150px"}}>Welcome to DashBoard</h1>


          </div>











          <div class="col-md-12">
          <div class="card flex-md-row mb-6 box-shadow ">
            <div class="card-body d-flex flex-column align-items-start md-6">
              <strong class="d-inline-block mb-2 text-success">COURSE</strong>
              <div className="">NO REGISTERED COURSE!!</div>
              <a href="/home/dashboard/activecourses">view all chapters</a>
            </div>
            <div className="md-6 d-flex flex-column align-items-start ">
                 progress status
                 <h2>NOT found</h2>
            </div>
          </div>
        </div>












        </div>
      </div>






      
    </div>
  );
};

export default Dashboard;



