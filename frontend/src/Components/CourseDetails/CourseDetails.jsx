import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { courses,collegeCourses ,professionalCourses } from "../../assets/courseData";
import "./CourseDetails.css";


const CourseDetails = () => {
  const { id, dataset } = useParams(); // Retrieve both id and dataset from the URL

  // Map datasets to their identifiers
  const datasets = {courses,collegeCourses,professionalCourses};
  console.log("Dataset from URL:", dataset); // Log the dataset parameter
  console.log("Available datasets:", Object.keys(datasets));
  // Ensure the dataset exists
  const selectedDataset = datasets[dataset];
  if (!selectedDataset) {
    return <h1>Invalid dataset!</h1>;
  }

  // Find the course within the selected dataset
  const course = selectedDataset.find((course) => course.id === parseInt(id));

  if (!course) {
    return <h1>Course not found!</h1>;
  }

  return (
    <Container className=" details my-5">
      {/* Display Course Image */}
      <img
        src={course.img} // Make sure the course object has the 'image' property
        alt={course.title}
        className="img-fluid img1 mb-4" // Optional: makes image responsive and adds margin-bottom
      />

      <h1>{course.title}</h1>
      <div className="mt-3 mb-4">
        <button
          className="btn btn-enquiry"
          onClick={() => (window.location.href = "tel:+918925017524")}
        >
          Enquire Now
        </button>
      </div>
      <h4> Course Overview</h4>
      <p>{course.overview}</p>
      <h4> What You Will Learn</h4>
      <ul>
        {course.learn.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4> Benefits and Skills Gained After This Course</h4>
      <ul>
        {course.benefits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>Roles of Jobs You Are Eligible to Apply For</h4>
      <ul>
        {course.roles.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>FAQ</h4>
      <ol>
        {course.faq.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </Container>
  );
};

export default CourseDetails;
