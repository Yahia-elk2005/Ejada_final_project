import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {
  const reviews = [1, 2, 3, 4, 5]; // Added one more to show scrolling better

  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: '#f4f4f4' }}>
      <Container>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 } // Shows 3 cards at a time on large screens
          }}
          pagination={{ clickable: true }}
          className="pb-5" // Padding for the pagination dots
        >
          {reviews.map((_, idx) => (
            <SwiperSlide key={idx}>
              <Card className="border-0 shadow-sm h-100 rounded-0">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: '#4a1c1c' }}></div>
                      <div>
                        <h6 className="mb-0 text-dark" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>CYNTHIA CAROLINE</h6>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>15 July 2023</small>
                      </div>
                    </div>
                    <div className="text-warning" style={{ fontSize: '1.1rem', letterSpacing: '2px' }}>
                      ★★★★★
                    </div>
                  </div>
                  <Card.Text className="text-muted mt-4" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                    Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonials;