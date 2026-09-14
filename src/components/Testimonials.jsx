import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
  const reviews = [1, 2, 3, 4];

  return (
    <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="g-4 flex-nowrap overflow-auto" style={{ paddingBottom: '1rem', scrollbarWidth: 'none' }}>
          {reviews.map((_, idx) => (
            <Col key={idx} lg={3} md={6} style={{ minWidth: '320px' }}>
              <Card className="border-0 shadow-sm h-100 rounded-0">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="rounded-circle bg-dark" style={{ width: '45px', height: '45px' }}></div>
                      <div>
                        <h6 className="mb-0 fw-bold" style={{ fontSize: '0.85rem' }}>CYNTHIA CAROLINE</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>15 July 2023</small>
                      </div>
                    </div>
                    <div className="text-warning" style={{ letterSpacing: '2px' }}>
                      ★★★★★
                    </div>
                  </div>
                  <Card.Text className="text-muted mt-3" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                    Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;