import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-teal text-white pt-5 pb-4 mt-0">
      <Container>
        <Row className="gy-4 mb-5">
          <Col lg={4} md={12}>
            <h2 className="fw-bold mb-4" style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem', letterSpacing: '1px' }}>MODEVA</h2>
            <table className="text-white small" style={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
              <tbody>
                <tr>
                  <td style={{ width: '80px', verticalAlign: 'top' }}>WhatsApp</td>
                  <td style={{ verticalAlign: 'top' }}>: +62 859 9999 999</td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: 'top' }}>Email</td>
                  <td style={{ verticalAlign: 'top' }}>: hello@modeva.com</td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: 'top' }}>Address</td>
                  <td style={{ verticalAlign: 'top' }}>: Lorem ipsum street Block B Number 08,<br/>Jakarta, Indonesia, 12345</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col lg={2} md={4} className="mt-lg-5">
            <h6 className="fw-bold mb-4 small">Menu</h6>
            <ul className="list-unstyled small d-grid gap-3 opacity-100">
              <li><a href="#sale" className="text-white text-decoration-none">Sale</a></li>
              <li><a href="#new" className="text-white text-decoration-none">New Arrivals</a></li>
              <li><a href="#formal-men" className="text-white text-decoration-none">Formal Men</a></li>
              <li><a href="#formal-woman" className="text-white text-decoration-none">Formal Woman</a></li>
              <li><a href="#casual-men" className="text-white text-decoration-none">Casual Men</a></li>
              <li><a href="#casual-woman" className="text-white text-decoration-none">Casual Woman</a></li>
            </ul>
          </Col>
          <Col lg={3} md={4} className="mt-lg-5">
            <h6 className="fw-bold mb-4 small">Get Help</h6>
            <ul className="list-unstyled small d-grid gap-3 opacity-100">
              <li><a href="#faq" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#customer" className="text-white text-decoration-none">Customer Service</a></li>
              <li><a href="#refund" className="text-white text-decoration-none">Refund and Return</a></li>
              <li><a href="#terms" className="text-white text-decoration-none">Terms and Conditions</a></li>
              <li><a href="#shipping" className="text-white text-decoration-none">Shipping</a></li>
            </ul>
          </Col>
          <Col lg={3} md={4} className="mt-lg-5">
            <h6 className="fw-bold mb-4 small">Account</h6>
            <ul className="list-unstyled small d-grid gap-3 opacity-100">
              <li><a href="#account" className="text-white text-decoration-none">My Account</a></li>
              <li><a href="#orders" className="text-white text-decoration-none">My Orders</a></li>
              <li><a href="#vouchers" className="text-white text-decoration-none">Vouchers and Discounts</a></li>
            </ul>
          </Col>
        </Row>
        <div className="text-center small opacity-75 pt-2" style={{ fontSize: '0.75rem' }}>
          <p className="mb-1">All rights reserved</p>
          <p className="mb-0">Copyright 2026 By Modeva Fashion</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;