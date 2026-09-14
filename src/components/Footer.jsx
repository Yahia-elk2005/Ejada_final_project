import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-teal text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h2 className="fw-bold fs-1 mb-3">MODEVA</h2>
            <p className="small mb-1">WhatsApp : +62 859 9999 999</p>
            <p className="small mb-1">Email : hello@modeva.com</p>
            <p className="small">Address : Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345</p>
          </Col>
          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3">Menu</h6>
            <ul className="list-unstyled small d-grid gap-2">
              <li><a href="#sale" className="text-white text-decoration-none">Sale</a></li>
              <li><a href="#new" className="text-white text-decoration-none">New Arrivals</a></li>
              <li><a href="#formal" className="text-white text-decoration-none">Formal Men</a></li>
              <li><a href="#formal" className="text-white text-decoration-none">Formal Woman</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3">Get Help</h6>
            <ul className="list-unstyled small d-grid gap-2">
              <li><a href="#faq" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#customer" className="text-white text-decoration-none">Customer Service</a></li>
              <li><a href="#refund" className="text-white text-decoration-none">Refund and Return</a></li>
              <li><a href="#terms" className="text-white text-decoration-none">Terms and Conditions</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled small d-grid gap-2">
              <li><a href="#account" className="text-white text-decoration-none">My Account</a></li>
              <li><a href="#orders" className="text-white text-decoration-none">My Orders</a></li>
              <li><a href="#vouchers" className="text-white text-decoration-none">Vouchers and Discounts</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4 border-light opacity-25" />
        <div className="text-center small">
          <p className="mb-0">All rights reserved</p>
          <p className="mb-0 opacity-75">Copyright 2026 By Modeva Fashion</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;