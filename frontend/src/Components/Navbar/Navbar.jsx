import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/vivilogo.jpg";

const CustomNavbar = () => {
  return (
    <Navbar className="custom-navbar">
      <Container>
        {/* First Row: Brand and Search Bar */}
        <Row>
          <Col lg={6} sm={6}>
            <Navbar.Brand href="#home" className="brand-logo">
              <img src={logo} alt="" height={40} width={100} />
            </Navbar.Brand>
          </Col>
          <Col lg={6} sm={6}>
            <div className="input-group a2 search-form">
              <input
                type="text"
                className="form-control"
                placeholder="Search courses"
                aria-label="Search"
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
  );
};

export default CustomNavbar;
