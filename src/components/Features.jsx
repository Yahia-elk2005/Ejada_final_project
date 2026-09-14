import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="g-4 align-items-center">
        <Col lg={4}>
          <Card className="text-center border-0 bg-light p-4 h-100">
            <Card.Body>
              <div className="rounded-circle bg-teal text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                ✓
              </div>
              <Card.Title className="fs-4">100% Satisfaction Guaranteed</Card.Title>
              <Card.Text className="text-muted small">
                Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="text-start border-0 bg-light p-3 mb-4">
            <Card.Body className="d-flex align-items-center gap-3">
              <div className="rounded-circle bg-teal text-white d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                🎧
              </div>
              <div>
                <Card.Title className="fs-5 mb-1">24/7 Online Service</Card.Title>
                <Card.Text className="text-muted small mb-0">Lorem ipsum dolor sit amet consectetur.</Card.Text>
              </div>
            </Card.Body>
          </Card>

          <Card className="text-start border-0 bg-light p-3">
            <Card.Body className="d-flex align-items-center gap-3">
              <div className="rounded-circle bg-teal text-white d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                🚀
              </div>
              <div>
                <Card.Title className="fs-5 mb-1">Fast Delivery</Card.Title>
                <Card.Text className="text-muted small mb-0">Lorem ipsum dolor sit amet consectetur.</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="text-center border-0 bg-light p-4 h-100">
            <Card.Body>
              <div className="rounded-circle bg-teal text-white d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                💳
              </div>
              <Card.Title className="fs-4">Payment With Secure System</Card.Title>
              <Card.Text className="text-muted small">
                Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;