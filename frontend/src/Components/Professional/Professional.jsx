import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import courseData from "../../assets/courseData"; // Import course data
import './Professional.css';

const ProfessionalCourse = () => {
  const navigate = useNavigate();

  // Handle card click and navigate to the details page
  const handleCardClick = (id) => {
    navigate(`/course/professionalCourses/${id}`); // Include dataset ("professionalCourses") in the route
  };

  // Extract the 'professionalCourses' dataset
  const professionalCourses = courseData.professionalCourses;

  return (
    <Container className="my-5">
      <Row xs={2}>
        {Array.isArray(professionalCourses) && professionalCourses.map((data) => (
          <Col key={data.id} lg={3} md={4} sm={6} className="professional mb-4">
            <Card onClick={() => handleCardClick(data.id)} className="professional-card cursor-pointer">
              <Card.Img variant="top" className="detail-imgs" src={data.img} alt={data.title} />
              <Card.Body>
                <Card.Title className="professional-card-title">{data.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProfessionalCourse;
