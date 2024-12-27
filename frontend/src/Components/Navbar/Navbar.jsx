import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar className="custom-navbar">
      <Container>
        {/* First Row: Brand and Search Bar */}
        <Row >
          <Col lg={6} sm={6} >
            <Navbar.Brand href="#home" className="brand-logo">Vivi Academy</Navbar.Brand>
          </Col>
          <Col lg={6} sm={6}>
            <Form className="a2 search-form">
              <FormControl
                type="search"
                placeholder="Search courses"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Col>
        </Row>

        {/* Second Row: Navigation Links */}
        <Row >
          <Col lg={12} sm={12} >
            <Nav >
              <Nav.Link href="#home" className="nav-link a1">Home</Nav.Link>
              <Nav.Link href="#categories" className="nav-link a1">Category</Nav.Link>
              <Nav.Link href="#profile" className="nav-link a1">Profile</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
