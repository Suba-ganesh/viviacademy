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
    <>
      <Navbar className="custom-navbar">
        <Container>
          {/* First Row: Brand and Search Bar */}
          <Row>
            <Col lg={6} sm={6}>
              <Navbar.Brand href="#home" className="brand-logo">
                <img src={logo} alt="Logo" height={40} width={100} />
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
                  onChange={handleSearch} // Update the state on input
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
                <Nav.Link href="#home" className="nav-link a1">
                  Home
                </Nav.Link>
                <Nav.Link href="#categories" className="nav-link a1">
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

      {/* Display Filtered Results */}
      <Container className="search-results">
        {searchQuery && (
          <div>
            <h5>Search Results:</h5>
            {filteredCourses.length > 0 ? (
              <ul>
                {filteredCourses.map((course) => (
                  <li key={course.id}>
                    <a href={`/course/courses/${course.id}`}>
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No courses found for "{searchQuery}"</p>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default CustomNavbar;
