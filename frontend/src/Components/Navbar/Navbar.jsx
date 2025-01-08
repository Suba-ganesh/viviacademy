import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/vivilogo.jpg";
import courseData from "../../assets/courseData";

const CustomNavbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to track search input
  const [filteredCourses, setFilteredCourses] = useState([]); // State for filtered courses

  // Combine all datasets into a single array
  const allCourses = [
    ...courseData.courses,
    ...courseData.collegeCourses,
    ...courseData.professionalCourses,
  ];

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(query);

    if (query) {
      // Filter across all datasets
      const filtered = allCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.dataset.toLowerCase().includes(query)
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses([]); // Clear filtered courses if query is empty
    }
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
              <div className="input-with-icon">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search courses"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* Display Filtered Courses */}
        {filteredCourses.length > 0 && (
          <Row className="mt-5">
            <Col lg={12} sm={12}>
              <div className="filtered-courses">
                <h5>Search Results:</h5>
                <ul>
                  {filteredCourses.map((course) => (
                    <li key={`${course.id}-${course.dataset}`}>
                      <a href={`/course/${course.dataset}/${course.id}`}>
                        {course.title}{" "}
                        <span className="course-info">({course.dataset})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        )}

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
