import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import courseData from "../../assets/courseData"; // Import course data
import './Course.css';

const CourseCards = () => {
  const navigate = useNavigate();

  // Extract only the 'courses' dataset
  const courses = courseData.courses;

  // Handle card click
  const handleCardClick = (id) => {
    navigate(`/course/courses/${id}`); // Include dataset ("courses") in the route
  };

  return (
    <Container className="my-5">
      <Row xs={2}>
        {courses.map((course) => (
          <Col key={course.id} lg={3} md={4} sm={6} className="mb-4">
            <Card
              onClick={() => handleCardClick(course.id)}
              className="cursor-pointer"
            >
              <Card.Img
                variant="top"
                className="detail-img"
                src={course.img}
                alt={course.title}
              />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseCards;
