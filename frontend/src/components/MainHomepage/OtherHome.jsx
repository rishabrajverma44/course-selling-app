import React from "react";
import NavBar from "../NavBar";
import "./css/OtherHome.css";
import course_1 from "../image/imageone.jpg"
import course_2 from "../image/imagetwo.jpg"
import company_1 from "../image/company_1.png"
import company_2 from "../image/company_2.jpg"
import company_3 from "../image/company_3.jpg"
import company_4 from "../image/company_4.png"
import company_5 from "../image/company_5.png"
import company_6 from "../image/company_6.jpg"

const MainHome = () => {
  
    
  return (
    <>
      <NavBar />
      <div className="container1">
        <div className="left-card"><img src={course_1} alt="course1-img" />
          <h3>course1</h3> </div>
        <div className="right-card"><img src={course_2} alt="course2-img" />
          <h3>course2</h3> </div>
      </div>

      <div className="container2">
        <div class="logos">
          <div class="logos-slide">
            <img src={company_1} alt="company-img" />
            <img src={company_2} alt="company-img" />
            <img src={company_3} alt="company-img" />
            <img src={company_4} alt="company-img" />
            <img src={company_5} alt="company-img" />
            <img src={company_6} alt="company-img" />
          </div>

          <div class="logos-slide">
            <img src={company_1} alt="company-img" />
            <img src={company_2} alt="company-img" />
            <img src={company_3} alt="company-img" />
            <img src={company_4} alt="company-img" />
            <img src={company_5} alt="company-img" />
            <img src={company_6} alt="company-img" />
          </div>
        </div>
      </div>

      <div className="container3">
        <div className="inner">
          <div className="left-inner">
            <img src="https://gahanai.com/assets/slider_img/AI_Training_cmp.jpg" alt="course-img" />
          </div>
          <div className="right-inner">
            <h1>Digital Services</h1>
            <p>Speed up your digital way with our range of legacy and emerging technology coverage. We are providing Artificial Intelligence solutions, Consultancy, E&E Architecture, Sensors setup, AV/ADAS algorithm development, Corporate Training, Drive-by-wire (DBW), Annotation services.</p>
          </div>
        </div>
      </div>




      <div className="container4">container4</div>

    </>
  );
};

export default MainHome;
