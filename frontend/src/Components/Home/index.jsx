import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./home.css";
import schoolstudent from "../../assets/schoolstudent.png";
import collegestudent from "../../assets/collegestudent.png";
import itprofessional from "../../assets/it.png";

const Home = () => {
  const [bgColor, setBgColor] = useState(""); // State for background color

  return (
    <div className="home flex flex-wrap">
      <div
        className="innerhome flex  flex-wrap justify-content-around p-4"
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          onMouseEnter={() => setBgColor("#ff9800")}
          onMouseLeave={() => setBgColor("")}
          className="school-section"
        >
          <img
            src={schoolstudent}
            alt="School Student"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="school border-round-3xl align-items-center font-bold text-white">
            <p>School Student</p>
          </div>
        </div>

        <div
          onMouseEnter={() => setBgColor("#2196f3")}
          onMouseLeave={() => setBgColor("")}
          className="college-section"
        >
          <img
            src={collegestudent}
            alt="College Student"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="school border-round-3xl align-items-center font-bold text-white">
            <p>College Student</p>
          </div>
        </div>

        <div
          onMouseEnter={() => setBgColor("#8bc34a")}
          onMouseLeave={() => setBgColor("")}
          className="professional-section"
        >
          <img
            src={itprofessional}
            alt="Job Professional"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="job border-round-3xl align-items-center font-bold text-white">
            <p>Job Professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
