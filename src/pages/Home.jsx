import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CategoryGrid from '../components/CategoryGrid';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const API_URL = 'https://65XXXXXX.mockapi.io/products';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(res => setProducts(res.data)).catch(console.error);
  }, []);

  return (
    <>
      <div className="bg-teal text-white text-center py-2 small">
        Discount 20% For New Member, <strong>ONLY FOR TODAY!!</strong>
      </div>

      <Navbar bg="transparent" expand="lg" className="w-100 py-3">
        <Container>
          <Navbar.Brand href="/" className="text-teal fs-2 fw-bold">MODEVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              <Nav.Link href="#catalog" className="text-dark">Catalog</Nav.Link>
              <Nav.Link href="#sale" className="text-dark">Sale</Nav.Link>
              <Nav.Link href="#new" className="text-dark">New Arrival</Nav.Link>
              <Nav.Link href="#about" className="text-dark">About</Nav.Link>
              <Nav.Link href="/admin" className="btn btn-outline-dark ms-2">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <p className="text-uppercase tracking-wide text-muted mb-2">MADE IN INDONESIA, DEDICATED TO INDONESIA</p>
              <h1 className="display-3 fw-bold mb-4">DISCOVER THE ART OF<br/>DRESSING UP</h1>
            </Col>
            <Col lg={5} className="d-none d-lg-block position-relative" style={{ height: '400px' }}>
              <div className="floating-card top-card shadow rounded">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" alt="Product" className="w-100 mb-2 rounded" style={{ height: '140px', objectFit: 'cover' }} />
                <h6 className="mb-1">Product Name in Here</h6>
                <small className="text-muted">$300.000</small>
              </div>
              <div className="floating-card bottom-card shadow rounded">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" alt="Product" className="w-100 mb-2 rounded" style={{ height: '140px', objectFit: 'cover' }} />
                <h6 className="mb-1">Product Name in Here</h6>
                <small className="text-muted">$300.000</small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <CategoryGrid />

      <Container className="my-5 py-4">
        <h2 className="text-center display-5 mb-5 fw-bold">THE BEST DRESS FOR THE BEST WOMAN</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 4 }
          }}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          className="pb-5"
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-3">
          <Button className="btn-teal rounded-pill px-4">SEE MORE →</Button>
        </div>
      </Container>

      <Container className="my-5 py-4">
        <h2 className="text-center display-5 mb-5 fw-bold">BEST OUTFIT FOR YOUR HAPPINESS</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 4 }
          }}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="pb-5"
        >
          {products.map(product => (
            <SwiperSlide key={`sec2-${product.id}`}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-3">
          <Button className="btn-teal rounded-pill px-4">SEE MORE →</Button>
        </div>
      </Container>

      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;