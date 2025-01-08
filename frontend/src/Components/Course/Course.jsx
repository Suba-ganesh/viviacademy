import React from "react";
import { Carousel } from "primereact/carousel";
import { useNavigate } from "react-router-dom";
import courseData from "../../assets/courseData"; // Import course data
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css"; // PrimeReact core CSS
import "primeicons/primeicons.css"; // PrimeIcons
import "./Course.css";

const CourseCards = () => {
  const navigate = useNavigate();

  // Extract only the 'courses' dataset
  const courses = courseData.courses;

  // Handle card click
  const handleCardClick = (id) => {
    navigate(`/course/courses/${id}`); // Include dataset ("courses") in the route
  };

  // Template for rendering each course in the carousel
  const courseTemplate = (course) => (
    <div className="p-3">
      <div
        className="card cursor-pointer"
        onClick={() => handleCardClick(course.id)}
        style={{ textAlign: "center" }}
      >
        <img
          src={course.img}
          alt={course.title}
          className="detail-img w-100"
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5>{course.title}</h5>
          <p>{course.overview}</p>
        </div>
      </div>
    </div>
  );

  // Responsive options for carousel
  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
    { breakpoint: "768px", numVisible: 2, numScroll: 1 },
    { breakpoint: "560px", numVisible: 1, numScroll: 1 },
  ];

  return (
    <div className="my-5">
      <Carousel
        value={courses}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={courseTemplate}
      />
    </div>
  );
};

export default CourseCards;
