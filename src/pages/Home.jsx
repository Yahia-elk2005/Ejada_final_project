import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiSearch, FiUser, FiShoppingBag, FiX, FiThumbsUp, FiPhoneCall, FiSend, FiCreditCard } from 'react-icons/fi';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

// Assets from Figma
import logo from '../assets/Modeva.png';
import heroBg from '../assets/f43a681d7b8898aabfd20ba4cce7738f6423baa8.jpg';
import cardProductImg from '../assets/d35567818222b2286b78df3d7b03f99b6c046725.jpg';
import formalWomanImg from '../assets/41e09ff70dac848d36b787163f2d6fc87b806080.jpg';
import formalMenImg from '../assets/c821e3b385057f30e8a04b4124732d426c8d0332.jpg';
import casualStyleImg from '../assets/e38106164a677189095f3e59f420ccfd8728c180.jpg';

import './Home.css';

const API_URL = 'https://6aa7e5149b08676cd32b9f39.mockapi.io/products';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    axios.get(API_URL).then(res => setProducts(res.data)).catch(console.error);
  }, []);

  const womanProducts = products.filter(product => product.category === 'Woman');
  const menProducts = products.filter(product => product.category === 'Men');

  return (
    <div className="page-wrapper">
      {/* Hero Wrapper with Background Image */}
      <div className="hero-wrapper" style={{ backgroundImage: `url(${heroBg})` }}>
        {/* Top Discount Banner */}
        {showBanner && (
          <div className="top-banner d-flex justify-content-between align-items-center px-4 py-2">
            <div className="w-100 text-center small text-white">
              Discount 20% For New Member, <strong>ONLY FOR TODAY!!</strong>
            </div>
            <FiX className="text-white cursor-pointer" onClick={() => setShowBanner(false)} />
          </div>
        )}

        {/* Navbar */}
        <Navbar expand="lg" className="navbar-custom py-3">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="MODEVA" className="brand-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center gap-3">
                <Nav.Link href="#catalog" className="nav-item-link">Catalog <span>▾</span></Nav.Link>
                <Nav.Link href="#sale" className="nav-item-link">Sale</Nav.Link>
                <Nav.Link href="#new" className="nav-item-link">New Arrival</Nav.Link>
                <Nav.Link href="#about" className="nav-item-link">About</Nav.Link>
                <Nav.Link href="/admin" className="nav-item-link">Dashboard</Nav.Link>
              </Nav>
              
              <div className="d-flex align-items-center gap-3 ms-lg-4 mt-3 mt-lg-0">
                <InputGroup className="search-box">
                  <InputGroup.Text className="bg-white border-end-0 rounded-pill-start">
                    <FiSearch className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search"
                    className="border-start-0 rounded-pill-end shadow-none"
                  />
                </InputGroup>
                <FiUser className="nav-icon" />
                <FiShoppingBag className="nav-icon" />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero Section */}
        <Container className="hero-content py-5">
          <Row className="align-items-center min-vh-75">
            <Col lg={7} className="text-white mb-5 mb-lg-0">
              <p className="subtitle text-uppercase tracking-wider">MADE IN INDONESIA, DEDICATED TO INDONESIA</p>
              <h1 className="hero-title display-2 fw-bold mb-5">DISCOVER THE ART OF<br />DRESSING UP</h1>
              <div className="scroll-down small">
                SCROLL DOWN <span> double-down-arrow </span>
              </div>
            </Col>

            {/* Floating Product Cards */}
            <Col lg={5} className="position-relative d-none d-lg-block">
              <div className="floating-card card-top bg-white p-3 rounded shadow-lg d-flex gap-3 align-items-center">
                <img src={cardProductImg} alt="Product" className="card-thumb rounded" />
                <div>
                  <h6 className="fw-bold mb-1">Product Name in Here</h6>
                  <p className="text-muted small mb-2">$300.000</p>
                  <a href="#shop" className="shop-link small fw-bold">SHOP NOW</a>
                </div>
              </div>

              <div className="floating-card card-bottom bg-white p-3 rounded shadow-lg d-flex gap-3 align-items-center">
                <div>
                  <h6 className="fw-bold mb-1">Product Name in Here</h6>
                  <p className="text-muted small mb-2">$300.000</p>
                  <a href="#shop" className="shop-link small fw-bold">SHOP NOW</a>
                </div>
                <img src={cardProductImg} alt="Product" className="card-thumb rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Category Grid Section */}
      <Container className="my-5 py-4">
        <Row className="g-4">
          <Col md={6}>
            <div className="category-card mb-4" style={{ backgroundImage: `url(${formalWomanImg})` }}>
              <div className="overlay d-flex align-items-center justify-content-center">
                <h3 className="category-title text-white">FORMAL WOMAN</h3>
              </div>
            </div>
            <div className="category-card" style={{ backgroundImage: `url(${formalMenImg})` }}>
              <div className="overlay d-flex align-items-center justify-content-center">
                <h3 className="category-title text-white">FORMAL MEN</h3>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="category-card tall" style={{ backgroundImage: `url(${casualStyleImg})` }}>
              <div className="overlay d-flex align-items-center justify-content-center">
                <h3 className="category-title text-white">CASUAL STYLE</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Woman Products Section */}
      <Container className="my-5 py-4">
        <h2 className="section-heading text-center display-5 mb-5">THE BEST DRESS FOR THE BEST WOMAN</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 4 }
          }}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          className="pb-5"
        >
          {womanProducts.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-3">
          <Button className="btn-teal rounded-pill px-4 py-2">SEE MORE →</Button>
        </div>
      </Container>

      {/* Men Products Section */}
      <Container className="my-5 py-4">
        <h2 className="section-heading text-center display-5 mb-5">BEST OUTFIT FOR YOUR HAPPINESS</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 4 }
          }}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="pb-5"
        >
          {menProducts.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-3">
          <Button className="btn-teal rounded-pill px-4 py-2">SEE MORE →</Button>
        </div>
      </Container>

      {/* Features Section */}
      <div className="bg-light py-5">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col md={4}>
              <div className="feature-card h-100 bg-white p-4 rounded text-center shadow-sm d-flex flex-column justify-content-center align-items-center">
                <div className="icon-circle mb-3"><FiThumbsUp /></div>
                <h5 className="fw-bold mb-3">100% Satisfaction Guaranteed</h5>
                <p className="text-muted small">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.</p>
              </div>
            </Col>
            <Col md={4} className="d-flex flex-column gap-4">
              <div className="feature-card bg-white p-4 rounded shadow-sm d-flex align-items-center gap-3">
                <div className="icon-circle"><FiPhoneCall /></div>
                <div>
                  <h6 className="fw-bold mb-1">24/7 Online Service</h6>
                  <p className="text-muted small mb-0">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi.</p>
                </div>
              </div>
              <div className="feature-card bg-white p-4 rounded shadow-sm d-flex align-items-center gap-3">
                <div className="icon-circle"><FiSend /></div>
                <div>
                  <h6 className="fw-bold mb-1">Fast Delivery</h6>
                  <p className="text-muted small mb-0">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card h-100 bg-white p-4 rounded text-center shadow-sm d-flex flex-column justify-content-center align-items-center">
                <div className="icon-circle mb-3"><FiCreditCard /></div>
                <h5 className="fw-bold mb-3">Payment With Secure System</h5>
                <p className="text-muted small">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Home;