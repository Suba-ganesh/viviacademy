import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./home.css";
import schoolstudent from "../../assets/schoolstudent.png";
import collegestudent from "../../assets/collegestudent.png";
import itprofessional from "../../assets/it.png";
import CourseCards from "../Course/Course";
import CollegeCourse from "../College/College";
import ProfessionalCourse from "../Professional/Professional";
import SchoolCourse from "../School";

// Mock ProductService if not already defined

const Home = () => {
  const [bgColor, setBgColor] = useState(""); // State for background color 
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active tab

  const items = [
    { label: "School" },
    { label: "College" },
    { label: "Professional" },
  ];


  // Assign background color dynamically
  const handleMouseEnter = (color) => setBgColor(color);
  const handleMouseLeave = () => setBgColor("");


  // Function to render content based on the active tab
  const renderTabContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div>
            <SchoolCourse />
          </div>
        );
      case 1:
        return (
          <div>
            <CollegeCourse />
          </div>
        );
      case 2:
        return (
          <div>
            <ProfessionalCourse />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home p-2 flex flex-wrap">
      <div
        className="innerhome flex flex-wrap justify-content-around p-4"
        style={{
          backgroundColor: bgColor || "#fff",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          onMouseEnter={() => handleMouseEnter("#ff9800")}
          onMouseLeave={handleMouseLeave}
          className="school-section"
        >
          <img
            src={schoolstudent}
            alt="School Student"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="school section-label border-round-3xl align-items-center font-bold text-white">
            <p>School Student</p>
          </div>
        </div>

        <div
          onMouseEnter={() => handleMouseEnter("#2196f3")}
          onMouseLeave={handleMouseLeave}
          className="college-section"
        >
          <img
            src={collegestudent}
            alt="College Student"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="school section-label border-round-3xl align-items-center font-bold text-white">
            <p>College Student</p>
          </div>
        </div>

        <div
          onMouseEnter={() => handleMouseEnter("#8bc34a")}
          onMouseLeave={handleMouseLeave}
          className="professional-section"
        >
          <img
            src={itprofessional}
            alt="Job Professional"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="job section-label border-round-3xl align-items-center font-bold text-white">
            <p>Professionals</p>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center", width: "100%", padding: "10px" }}>
        COURSES
      </h1>

      <div className="card border-none">
        <CourseCards />
      </div>

      {/* TabMenu with dynamic content */}
      <div className="card w-full text-center">
        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
        <div className="tab-content mt-4">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Home;

