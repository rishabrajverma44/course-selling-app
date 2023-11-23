import React from "react";
import { useState } from "react";
import "./Frontend.css";

const Frontend = (data) => {
  const [clicked, setClicked] = useState(false);
  const error=data.error.err;
  console.log(data.error.err);
  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
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
                Cycle Setup of the systems and coding Environment ,Introduction
                to CARLA Simulator , Camera Sensor ,Lidar Sensor , RADAR Sensor
                ,Sensor Setup with ROS on Jetson Nano Vehicle Dynamics , Dynamic
                Bicycle Model, Dynamics of a Rigid Body ,Vehicle Control
                Odometry, SLAM, and Localization ,Localization ,NVIDIA Jetson
                Road and Lane Detection ,Object Detection ,3D Object Detection
                ,Object Tracking E2E Perception , Decision Making and Planning ,
                Autonomous Navigation with CARLA Simulato ,Preparing Vehicle for
                Data Acquisition and Testing ,Data recording tools and
                Annotation Pipelines ,Adaptive Cruise Control
              </p>
              <div className="btndiv">
                <button class="btn btn-primary" onClick={data.event}>
                  Buy Course
                </button>
              </div>
            </div>
            <h3 style={{textAlign:'center',color:'red', fontSize:'15px'}}>{error}</h3>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">SOFTWARE-DEFINED VEHICLE DEVELOPMENT</h5>
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
                Cycle Setup of the systems and coding Environment ,Introduction
                to CARLA Simulator , Camera Sensor ,Lidar Sensor , RADAR Sensor
                ,Sensor Setup with ROS on Jetson Nano Vehicle Dynamics , Dynamic
                Bicycle Model, Dynamics of a Rigid Body ,Vehicle Control
                Odometry, SLAM, and Localization ,Localization ,NVIDIA Jetson
                Road and Lane Detection ,Object Detection ,3D Object Detection
                ,Object Tracking E2E Perception , Decision Making and Planning ,
                Autonomous Navigation with CARLA Simulato ,Preparing Vehicle for
                Data Acquisition and Testing ,Data recording tools and
                Annotation Pipelines ,Adaptive Cruise Control
              </p>
              <div className="btndiv">
                <button className={`btn-primary ${clicked ? "clicked" : ""}`}
                  onClick={handleButtonClick}>
                  {clicked ? "Comning soon" : "Buy Course"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
