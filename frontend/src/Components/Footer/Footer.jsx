import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container fluid className="footer1 p-4">
        <Row>
          <Col lg={4} md={4} sm={4} xs={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Vivi Academy</h5>
            <p>Your gateway to learning anything, anywhere, anytime.</p>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark footer-a">Home</a>
              </li>
              <li>
                <a href="#!" className="text-dark footer-a">Category</a>
              </li>
              <li>
                <a href="#!" className="text-dark footer-a">Profile</a>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <p>Email: support@viviacademy.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-dark text-light">
        © 2024 Vivi Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
