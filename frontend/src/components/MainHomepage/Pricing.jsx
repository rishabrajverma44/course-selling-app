import React from "react";
import { Link } from "react-router-dom";
import "./css/Pricing.css";
import NavBar from "../NavBar";

const Pricing = () => {
  return (
    <>
      <NavBar />
      <div className="start bg-black" style={{height:"90px"}}>welcome</div>
      <div className="pricing_main">
        <div class="container card-body pricing price_card">
          <h5 class="card-title">ADAS</h5>
          <h5>
            <div class="price">
              <sub class="currency">Rs.</sub>
              35,000{" "}
              <del>
                <i class="fas fa-rupee-sign" aria-hidden="true"></i>
                ₹50,000
              </del>
              <sup class="dis">30% off</sup>
            </div>
          </h5>
          <p class="card-text">
            Introduction to Vehicle Architecture And Self-Driving Car ,
            Components in Autonomous Driving , ADAS/AV Software Development
            Cycle Setup of the systems and coding Environment ,Introduction to
            CARLA Simulator , Camera Sensor ,Lidar Sensor , RADAR Sensor ,Sensor
            Setup with ROS on Jetson Nano Vehicle Dynamics , Dynamic Bicycle
            Model, Dynamics of a Rigid Body ,Vehicle Control Odometry, SLAM, and
            Localization ,Localization ,NVIDIA Jetson Road and Lane Detection
            ,Object Detection ,3D Object Detection ,Object Tracking E2E
            Perception , Decision Making and Planning , Autonomous Navigation
            with CARLA Simulato ,Preparing Vehicle for Data Acquisition and
            Testing ,Data recording tools and Annotation Pipelines ,Adaptive
            Cruise Control
          </p>
          <div className="btndiv">
            <Link to="/home">
              <button class="btn btn-primary">Buy Course</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
