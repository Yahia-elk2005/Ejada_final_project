import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiSearch, FiUser, FiShoppingBag, FiX, FiThumbsUp, FiPhoneCall, FiSend, FiCreditCard, FiChevronDown } from 'react-icons/fi';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

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
      {showBanner && (
        <div className="top-banner d-flex justify-content-center align-items-center position-relative py-2">
          <span className="small">
            Discount 20% For New Member, <strong className="fw-bold">ONLY FOR TODAY!!</strong>
          </span>
          <FiX 
            className="position-absolute cursor-pointer text-white" 
            style={{ right: '20px', fontSize: '1.2rem' }} 
            onClick={() => setShowBanner(false)} 
          />
        </div>
      )}

      <div className="hero-wrapper" style={{ backgroundImage: `url(${heroBg})` }}>
        <Navbar expand="lg" className="navbar-custom py-4 position-absolute" style={{ top: 0 }}>
          <Container fluid className="px-lg-5">
            <Navbar.Brand href="/" className="me-4">
              <img src={logo} alt="MODEVA" className="brand-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto align-items-center gap-4">
                <Nav.Link href="#catalog" className="nav-item-link d-flex align-items-center gap-1">Catalog <FiChevronDown size={14}/></Nav.Link>
                <Nav.Link href="#sale" className="nav-item-link">Sale</Nav.Link>
                <Nav.Link href="#new" className="nav-item-link">New Arrival</Nav.Link>
                <Nav.Link href="#about" className="nav-item-link">About</Nav.Link>
                <Nav.Link href="/admin" className="nav-item-link">Dashboard</Nav.Link>
                <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                <InputGroup className="search-box">
                  <InputGroup.Text className="search-icon-bg">
                    <FiSearch size={15} />
                  </InputGroup.Text>
                  <Form.Control placeholder="Search" className="shadow-none search-input" />
                </InputGroup>
                <FiUser className="nav-icon ms-2" />
                <FiShoppingBag className="nav-icon" />
              </div>
              </Nav>
              
              
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="hero-content-wrapper">
          <Container fluid className="px-lg-5 h-100 position-relative d-flex align-items-end justify-content-between pb-5">
            <div className="hero-text-block text-white">
              <p className="subtitle text-uppercase mb-3">MADE IN INDONESIA, DEDICATED TO INDONESIA</p>
              <h1 className="hero-title fw-normal mb-0">DISCOVER THE ART OF<br />DRESSING UP</h1>
            </div>

            <div className="scroll-down text-white">
              SCROLL DOWN <FiChevronDown size={16} />
            </div>
            
            <div className="floating-cards-block d-none d-lg-flex flex-row justify-content-center align-items-center gap-4">
              <div className="floating-card card-top">
                <img src={cardProductImg} alt="Product" className="card-thumb" />
                <div className="card-info ps-3">
                  <h6 className="card-product-title mb-1">Product Name<br/>in Here</h6>
                  <p className="card-product-price mb-2">$300.000</p>
                  <a href="#shop" className="shop-link">SHOP NOW</a>
                </div>
              </div>
              
              <div className="floating-card card-bottom">
                <div className="card-info pe-3">
                  <h6 className="card-product-title mb-1">Product Name<br/>in Here</h6>
                  <p className="card-product-price mb-2">$300.000</p>
                  <a href="#shop" className="shop-link">SHOP NOW</a>
                </div>
                <img src={cardProductImg} alt="Product" className="card-thumb" />
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container className="my-5 py-5">
        <Row className="g-4">
          <Col md={6}>
            <div className="category-card mb-4" style={{ backgroundImage: `url(${formalWomanImg})` }}>
              <div className="overlay d-flex align-items-center px-5">
                <h3 className="category-title text-white mb-0">FORMAL WOMAN</h3>
              </div>
            </div>
            <div className="category-card" style={{ backgroundImage: `url(${formalMenImg})` }}>
              <div className="overlay d-flex align-items-center px-5">
                <h3 className="category-title text-white mb-0">FORMAL MEN</h3>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="category-card tall" style={{ backgroundImage: `url(${casualStyleImg})` }}>
              <div className="overlay d-flex align-items-center px-5">
                <h3 className="category-title text-white mb-0">CASUAL STYLE</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="my-5 py-4">
        <h2 className="section-heading text-center display-6 mb-5">THE BEST DRESS FOR THE BEST WOMAN</h2>
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
        <div className="text-center mt-2">
          <Button className="btn-teal rounded-pill px-5 py-2">SEE MORE</Button>
        </div>
      </Container>

      <Container className="my-5 py-4">
        <h2 className="section-heading text-center display-6 mb-5">BEST OUTFIT FOR YOUR HAPPINESS</h2>
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
        <div className="text-center mt-2">
          <Button className="btn-teal rounded-pill px-5 py-2">SEE MORE</Button>
        </div>
      </Container>

      <div className="bg-light py-5 mt-5">
        <Container className="py-4">
          <Row className="g-4 align-items-stretch">
            <Col md={4}>
              <div className="feature-card h-100 bg-white p-5 text-center d-flex flex-column justify-content-center align-items-center border-0 shadow-sm">
                <div className="icon-circle mb-4"><FiThumbsUp /></div>
                <h5 className="fw-bold mb-3">100% Satisfaction Guaranteed</h5>
                <p className="text-muted small mb-0">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.</p>
              </div>
            </Col>
            <Col md={4} className="d-flex flex-column gap-4">
              <div className="feature-card bg-white p-4 d-flex align-items-center gap-4 border-0 shadow-sm">
                <div className="icon-circle flex-shrink-0"><FiPhoneCall /></div>
                <div>
                  <h6 className="fw-bold mb-2">24/7 Online Service</h6>
                  <p className="text-muted small mb-0">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi.</p>
                </div>
              </div>
              <div className="feature-card bg-white p-4 d-flex align-items-center gap-4 border-0 shadow-sm">
                <div className="icon-circle flex-shrink-0"><FiSend /></div>
                <div>
                  <h6 className="fw-bold mb-2">Fast Delivery</h6>
                  <p className="text-muted small mb-0">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi.</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card h-100 bg-white p-5 text-center d-flex flex-column justify-content-center align-items-center border-0 shadow-sm">
                <div className="icon-circle mb-4"><FiCreditCard /></div>
                <h5 className="fw-bold mb-3">Payment With Secure System</h5>
                <p className="text-muted small mb-0">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;