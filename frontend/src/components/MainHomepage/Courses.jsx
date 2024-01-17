import React from "react";
import "./css/Course.css";
import img_1 from "../image/blue_lady.jpg";
import NavBar from "../NavBar";

const Courses = () => {
  return (
    <>
    <NavBar />
    <div className="start bg-black" style={{height:"90px"}}>welcome</div>
      <div className="container">
        <div id="fh5co-explore" class="fh5co-bg-section">
          <div class="fh5co-explore fh5co-explore1">
            <div class="container">
              <div class="container course">
                <div class="col-md-8 col-md-push-2 col-sm-12 text-center fh5co-heading m-4">
                  <h2>Course Wise Features</h2>
                  <p>
                    In Our Professional Training Course We Are Providing Lots Of
                    Features Those Are Below Check It out.{" "}
                  </p>
                </div>

                <div class="col-md-8 col-md-push-2  col-sm-12 animate-box fadeInUp animated-fast">
                  <img
                    style={{ marginLeft: "0em" }}
                    class="img-responsive"
                    src={img_1}
                    alt="work"
                  />
                </div>

                <div class="col-md-10 col-md-push-1 col-sm-12 animate-box fadeInUp animated-fast">
                  <div class="mt" style={{ margin: "2em" }}>
                    <h2 style={{ color: "#620000", width: "5%" }}> ADAS </h2>
                    <div>
                      <h3 style={{ margin: "0 0 10px 0 !important" }}>
                        {" "}
                        Course Overview:{" "}
                      </h3>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Batch</th>
                            <th>ONLINE - THEORY</th>
                            <th>OFFLINE - PRACTICAL</th>
                            <th>Trainer</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Batch1</td>
                            <td>6.30 A.M to 8.30 A.M (Mon to Fri)</td>
                            <td>9.00 A.M to 1.00 P.M (SAT)</td>
                            <td>
                              Working Experience in Automotive Company like
                              Mercedes and Nvidia ...
                            </td>
                          </tr>
                          <tr>
                            <td>Batch2</td>
                            <td>5.00 P.M to 7.00 P.M (Mon to Fri)</td>
                            <td>2.00 P.M to 6.00 P.M (SAT)</td>
                            <td>
                              Working Experience in Automotive Company like
                              Mercedes and Nvidia ...
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 style={{ margin: "0 0 0 0 !important" }}>
                      {" "}
                      Course Details:{" "}
                    </h3>
                    <ul class="list-nav" style={{ marginTop: "10px;" }}>
                      <li>
                        <i class="bx bx-radio-circle-marked"></i>
                        <strong class="strong" style={{ color: "#620000" }}>
                          Module 1 :{" "}
                        </strong>{" "}
                        <p> Introduction to Vehicle Architecture </p>
                        <ul class="sub_uls">
                          <li>ICE, EV, Hybrid</li>
                          <li>Ecu and powertrain compatibility</li>
                        </ul>
                        <p> Introduction of Self-Driving car </p>
                        <ul class="sub_uls">
                          <li>
                            End-to-end learning for self-driving
                            (imitation/reinforcement learning).
                          </li>
                          <li>Modular approaches to self-driving.</li>
                        </ul>
                        <p> Components in Autonomous Driving </p>
                        <ul class="sub_uls">
                          <li>Perception (camera, lidar, radar).</li>
                          <li>Localization (with visual and road maps).</li>
                          <li>Navigation and path planning.</li>
                          <li>Vehicle models and control algorithms.</li>
                        </ul>
                        <p> Approaches to Self-Driving. </p>
                        <ul class="sub_uls">
                          <li>Deep Learning Recap.</li>
                          <li>Imitation Learning.</li>
                          <li>Condition limitation Learning.</li>
                        </ul>
                        <p> ADAS/AV Software Development Cycle. </p>
                        <ul class="sub_uls">
                          <li>Software components.</li>
                          <li>Software ROS Fundamentals.</li>
                          <li>
                            Deriving requirements - Functional and Technical
                            requirements.
                          </li>
                          <li>Documentation tools.</li>
                        </ul>
                        <p> Setup of the systems and coding Environment. </p>
                        <ul class="sub_uls">
                          <li>System setup.</li>
                          <li>Tools installation.</li>
                          <li>Testing for different sensors.</li>
                          <li>Microcontroller coding.</li>
                        </ul>
                        <p> Introduction to CARLA Simulator. </p>
                        <ul class="sub_uls">
                          <li>Carla Simulator workflow.</li>
                          <li>Working with Carla.</li>
                          <li>Setting environment with Carla.</li>
                          <li>Running algorithms with Carla.</li>
                        </ul>
                      </li>

                      <li>
                        <i class="bx bx-radio-circle-marked"></i>
                        <strong class="strong" style={{ color: "#620000" }}>
                          Module 2 :{" "}
                        </strong>
                        <p> Introduction to Various Sensors. </p>

                        <p> Camera Sensor. </p>
                        <ul class="sub_uls">
                          <li>Camera Calibration.</li>
                          <li>
                            Multi-Camera Calibration Extrinsic &amp; Intrinsic
                            Calibration..
                          </li>
                          <li>
                            Basics of Camera projections starting from pin-hole
                            camera etc..
                          </li>
                          <li>
                            Features 🡪 Additional intro of Hough features
                            (primarily Hough lines, Hough circles, etc), Harris
                            Corner Detection, Linear Binary patterns..
                          </li>
                          <li>Basics of Key point estimation.</li>
                        </ul>

                        <p> Lidar Sensor. </p>
                        <ul class="sub_uls">
                          <li>LIDAR Calibration.</li>
                          <li>Lidar – Camera Calibration.</li>
                          <li>
                            Mapping of Lidar point cloud on Camera Image (3D
                            Projection/ Labels is enough).
                          </li>
                          <li>Lidar IMU Calibration.</li>
                        </ul>

                        <p> RADAR Sensor. </p>
                        <ul class="sub_uls">
                          <li>
                            Different types of Radar Data like RDI (Point
                            cloud), Cube Images, and Object lists.
                          </li>
                          <li>Introduction of mmw-radars (Dopplers effect).</li>
                          <li>Radar Calibration.</li>
                          <li>Radar – Camera Calibration.</li>
                        </ul>
                      </li>

                      <li>
                        <i class="bx bx-radio-circle-marked"></i>
                        <strong class="strong" style={{ color: "#620000" }}>
                          Module 3 :{" "}
                        </strong>

                        <p> Vehicle Dynamics. </p>
                        <ul class="sub_uls">
                          <li>
                            Introduction, Credits, Electronic Stability Program,
                            Holonomic Constraints, Non-Holonomic Constraints,
                            Coordinate Systems.
                          </li>
                          <li>
                            Kinematics of a Point, Kinematics of a Rigid Body,
                            Instantaneous Center of Rotation, Instantaneous
                            Center of Rotation.
                          </li>
                          <li>
                            Kinematic Bicycle Model, Rigid Body Motion,
                            Ackermann Steering Geometry.
                          </li>
                          <li>
                            Tire Models, Tread Block Models, Circle of Forces.
                          </li>
                        </ul>

                        <p>
                          {" "}
                          Dynamic Bicycle Model, Dynamics of a Rigid Body.{" "}
                        </p>

                        <p> Vehicle Control. </p>
                        <ul class="sub_uls">
                          <li>
                            Introduction, Brief History of Driver Assistance
                            Systems, Open-Loop Control, Closed-Loop Control,
                            Centrifugal Governor.
                          </li>
                          <li>
                            Black Box Control, Bang-Bang Control, PID Control.
                          </li>
                          <li>
                            Geometric Control, Pure Pursuit Control, Stanley
                            Control.
                          </li>
                          <li>Optimal Control, Model Predictive Control.</li>
                        </ul>

                        <p> Odometry, SLAM, and Localization. </p>
                        <ul class="sub_uls">
                          <li>
                            Visual Odometry, Odometry, Indirect Visual Odometry,
                            Image Formation, Epipolar Geometry, Direct Visual
                            Odometry.
                          </li>
                          <li>Simultaneous Localization and Mapping.</li>
                        </ul>

                        <p> NVIDIA Jetson . </p>
                        <ul class="sub_uls">
                          <li>SLAM on Jetson NANO with ROS components.</li>
                        </ul>
                      </li>

                      <li>
                        <i class="bx bx-radio-circle-marked"></i>
                        <strong class="strong" style={{ color: "#620000" }}>
                          Module 4 :{" "}
                        </strong>

                        <p> Road and Lane Detection. </p>
                        <ul class="sub_uls">
                          <li>
                            Introduction, Road and Lane Detection,
                            Representations, Ambiguities.
                          </li>
                          <li>
                            Road Segmentation, Deep Convolutional Image
                            Segmentation, Joint Semantic Segmentation, and 3D
                            Reconstruction, Driving Corridor Prediction.
                          </li>
                          <li>
                            Lane Marking Detection, Detection of Lane Markings,
                            Inverse Perspective Mapping, Parametric Lane Marking
                            Estimation, End-to-End Lane Marking Detection.
                          </li>
                          <li>Lane Detection, Model for Straight Lanes.</li>
                          <li>
                            Lane tracking, Model for Straight Lanes: Incremental
                            Localization, Model for Circular Lanes, Circular
                            trajectories are not enough, Clothoid Model.
                          </li>
                        </ul>

                        <p> Object Detection. </p>
                        <ul class="sub_uls">
                          <li>
                            Introduction, Motivation, Problem Setting,
                            Challenges.
                          </li>
                          <li>
                            Deep Machine Learning covers.
                            <ul>
                              <li>
                                CNN Architecture, Yolo-V5 or V6, MaskRCNN.
                              </li>
                              <li>
                                One complete CNN Model example (Take Object
                                Detection using CNN (Yolo Model)).
                              </li>
                            </ul>
                          </li>
                          <li>
                            Performance Evaluation, Measure Detection
                            Performance.
                          </li>
                          <li>
                            Sliding Window Object Detection, Part Based Models,
                            Results on KITTI.
                          </li>
                          <li>
                            Region-based CNNs, Hand-crafted Representations vs.
                            Learned Representations, R-CNN: Region-based
                            Convolutional Neural Network, Generalized Framework,
                            Fast R-CNN, Faster R-CNN: Region Proposal Network
                            (RPN), Feature Pyramid Network.
                          </li>
                        </ul>

                        <p>
                          {" "}
                          3D Object Detection. Image-based 3D Object Detection,
                          Lidar-based 3D Object Detection, Multi-modal 3D Object
                          Detection.{" "}
                        </p>

                        <p> Object Tracking. </p>
                        <ul class="sub_uls">
                          <li>
                            Introduction, Tracking, Filtering, online vs.
                            offline Tracking.
                          </li>
                          <li>
                            Filtering, State vs. Observation, Representation,
                            Probability Theory Recap, The Bayes Filter.
                          </li>
                          <li>
                            Association, Multi-Object Tracking, Object
                            Association Measures, Metric Learning,
                            Correspondence Ambiguities, Bipartite Graph
                            Matching, Graph-based Tracking, Advanced Graph-based
                            Models, and Multi-Object Tracking Evaluation.
                          </li>
                          <li>
                            Holistic Scene Understanding, Lane Detection vs.
                            Intersection Understanding, Sensor Fusion,
                            Probabilistic Graphical Model.
                          </li>
                          <li>
                            PnPNet: Perception and Prediction with Tracking in
                            the Loop.
                          </li>
                          <li>
                            Argoverse: 3D Tracking and Forecasting with Rich
                            Maps.
                          </li>
                        </ul>

                        <p>
                          {" "}
                          Object Detection on Jetson Nano with ROS Components.{" "}
                        </p>
                      </li>

                      <li>
                        <i class="bx bx-radio-circle-marked"></i>
                        <strong class="strong" style={{ color: "#620000" }}>
                          Module 5 :{" "}
                        </strong>

                        <p>
                          {" "}
                          E2E Perception L03 - Direct Perception - take this
                          slide.{" "}
                        </p>
                        <ul class="sub_uls">
                          <li>Occupancy Grid - 2d and 3d Application.</li>
                          <li>Sensor Fusion.</li>
                        </ul>

                        <p> Decision Making and Planning. </p>
                        <ul class="sub_uls">
                          <li>
                            Introduction, Modular Pipeline, Planning, and
                            Decision Making.
                          </li>
                          <li>
                            Route planning, Behavior Planning, Motion Planning -
                            A* and Hybrid A* algorithms.
                          </li>
                        </ul>

                        <p> Autonomous Navigation with CARLA Simulator. </p>
                        <ul class="sub_uls">
                          <li>Setup Algorithms to communicate with Carla.</li>
                          <li>Carla Simulation AV .</li>
                          <li>Carla Simulation in loop testing.</li>
                        </ul>
                      </li>

                      <li>
                        <i class="bx bx-radio-circle-marked"></i>
                        <strong class="strong" style={{ color: "#620000" }}>
                          {" "}
                          Module 6 :{" "}
                        </strong>

                        <p>
                          {" "}
                          Preparing Vehicle for Data Acquisition and Testing.{" "}
                        </p>
                        <ul class="sub_uls">
                          <li>
                            Sensors Suite and Calibration.
                            <ul>
                              <li>
                                GNSS – Lidar – Camera - RADAR Synchronization.
                              </li>
                              <li>All sensor Calibration.</li>
                            </ul>
                          </li>

                          <li>
                            Drive-by-wire Architecture.
                            <ul>
                              <li>DBW components.</li>
                              <li>DBW Architecture.</li>
                            </ul>
                          </li>
                          <li>ROS Middleware formulation.</li>
                        </ul>

                        <p> Data recording tools and Annotation Pipelines. </p>
                        <ul class="sub_uls">
                          <li>Types of Data Annotation for AV.</li>
                          <li>Complete Data Recorder.</li>
                          <li>
                            Creating E2E pipeline for complete data annotation
                            for AV .
                          </li>
                          <li>Data Annotation Quality Control Process.</li>
                        </ul>

                        <p> Adaptive Cruise Control. </p>
                        <ul class="sub_uls">
                          <li>E2E whiteboard of Adaptive Cruise Control.</li>
                          <li>Sensor Perception.</li>
                          <li>Planning .</li>
                          <li>Software Development.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
