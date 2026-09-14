import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CategoryGrid = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col lg={6}>
          <div className="mb-4 position-relative overflow-hidden" style={{ height: '280px' }}>
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" alt="Formal Woman" className="w-100 h-100 object-fit-cover" />
            <div className="position-absolute top-50 start-10 translate-middle-y text-white ps-4">
              <h3 className="display-6 fw-bold">FORMAL WOMAN</h3>
            </div>
          </div>
          <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" alt="Formal Men" className="w-100 h-100 object-fit-cover" />
            <div className="position-absolute top-50 start-10 translate-middle-y text-white ps-4">
              <h3 className="display-6 fw-bold">FORMAL MEN</h3>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="position-relative overflow-hidden h-100" style={{ minHeight: '580px' }}>
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" alt="Casual Style" className="w-100 h-100 object-fit-cover" />
            <div className="position-absolute top-50 start-10 translate-middle-y text-white ps-4">
              <h3 className="display-6 fw-bold">CASUAL STYLE</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryGrid;