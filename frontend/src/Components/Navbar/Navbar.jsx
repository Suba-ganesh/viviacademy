import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/vivilogo.jpg";
import courseData from "../../assets/courseData"; // Example course data

const CustomNavbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to track search input
  const [filteredCourses, setFilteredCourses] = useState([]); // State for filtered courses

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter courses based on the query
    const filtered = courseData.courses.filter((course) =>
      course.title.toLowerCase().includes(query)
    );
    setFilteredCourses(filtered);
  };

  return (
    <Navbar className="custom-navbar">
      <Container>
        {/* First Row: Brand and Search Bar */}
        <Row>
          <Col lg={6} sm={6}>
            <Navbar.Brand href="#home" className="brand-logo">
              <img src={logo} alt="" height={60} width={100} />
            </Navbar.Brand>
          </Col>
          <Col lg={6} sm={6}>
            <div className="input-group a2 search-form">
              <input
                type="text"
                className="form-control"
                placeholder="Search courses"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="btn btn-primary" type="button">
                <FaSearch />
              </button>
            </div>
          </Col>
        </Row>

        {/* Second Row: Navigation Links */}
        <Row>
          <Col lg={12} sm={12}>
            <Nav>
              <Nav.Link href="/" className="nav-link a1">
                Home
              </Nav.Link>
              <Nav.Link href="#category" className="nav-link a1">
                Category
              </Nav.Link>
              <Nav.Link href="#profile" className="nav-link a1">
                Profile
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      
    </Navbar>
  );
};

export default CustomNavbar;
