import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./home.css";
import schoolstudent from "../../assets/schoolstudent.png";
import collegestudent from "../../assets/collegestudent.png";
import itprofessional from "../../assets/it.png";

const Home = () => {
  const [bgColor, setBgColor] = useState(""); // State for background color

  const items = [
    { text: "WHEN IT WAS STARTED" },
    { text: "FOR WHAT WE STARTED" },
    { text: "THE STAFFS ARE 5 YEARS EXPERIENCE" },
  ];

  const itemTemplate = (item) => {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "4rem",
          background: "#f4f4f4",
          height: "10rem",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>{item.text}</h3>
      </div>
    );
  };

  return (
    <div className="home flex flex-wrap">
      <div
        className="innerhome flex flex-wrap justify-content-around pt-8"
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          onMouseEnter={() => setBgColor("#ff9800")}
          onMouseLeave={() => setBgColor("")}
        >
          <img
            src={schoolstudent}
            alt="School Student"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="school h-2rem w-18rem border-round-3xl align-items-center p-1 font-bold text-white">
            <p>School Student</p>
          </div>
        </div>

        <div
          onMouseEnter={() => setBgColor("#2196f3")}
          onMouseLeave={() => setBgColor("")}
        >
          <img
            src={collegestudent}
            alt="College Student"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="school h-2rem w-18rem border-round-3xl align-items-center p-1 font-bold text-white">
            <p>College Student</p>
          </div>
        </div>

        <div
          onMouseEnter={() => setBgColor("#8bc34a")}
          onMouseLeave={() => setBgColor("")}
        >
          <img
            src={itprofessional}
            alt="Job Professional"
            height={300}
            width={300}
            className="border-circle"
          />
          <div className="school h-2rem w-18rem border-round-3xl align-items-center p-1 font-bold text-white">
            <p>Job Professionals</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-300 mt-6 mb-6 p-8 w-100 h-8rem">
        <Carousel
          value={items}
          itemTemplate={itemTemplate}
          numVisible={1}
          numScroll={1}
          autoplayInterval={3000}
          circular
        />
      </div>

      <div
        className="flex flex-wrap justify-content-around bg-green-500 mt-6 mb-6 p-8 w-100"
        style={{ marginBottom: "200px" }}
      >
        <div>
          <span
            className="pi pi-envelope border-circle p-4 bg-black"
            style={{
              color: "white",
              fontSize: "6rem",
              border: "4px solid black",
            }}
          ></span>
          <div className="mt-2 font-semibold">viviacademy.admission@gmail.com</div>
        </div>
        <div>
          <span
            className="pi pi-phone border-circle p-4 bg-black"
            style={{
              color: "white",
              fontSize: "6rem",
              border: "4px solid black",
            }}
          ></span>
          <div className="mt-2 font-semibold">+91 8925017524</div>
        </div>
        <div>
          <span
            className="pi pi-map-marker border-circle p-4 bg-black"
            style={{
              color: "white",
              fontSize: "6rem",
              border: "4px solid black",
            }}
          ></span>
          <div className="mt-2 font-semibold">
            No2, Avinashi Road, Coimbatore
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
