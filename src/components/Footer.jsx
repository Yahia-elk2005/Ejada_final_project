import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-teal text-white pb-4 mt-0" style={{ paddingTop: '150px' }}>
      <Container>
        <Row className="gy-4 mb-5">
         
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