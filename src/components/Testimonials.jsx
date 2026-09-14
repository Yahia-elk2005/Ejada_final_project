import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const reviewsData = [
  {
    id: 1,
    name: 'CYNTHIA CAROLINE',
    date: '15 July 2023',
    stars: '★★★★★',
    avatarColor: '#4a1c1c',
    text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.'
  },
  {
    id: 2,
    name: 'CYNTHIA CAROLINE',
    date: '15 July 2023',
    stars: '★★★★★',
    avatarColor: '#4a1c1c',
    text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.'
  },
  {
    id: 3,
    name: 'CYNTHIA CAROLINE',
    date: '15 July 2023',
    stars: '★★★★★',
    avatarColor: '#4a1c1c',
    text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.'
  },
  {
    id: 4,
    name: 'CYNTHIA CAROLINE',
    date: '15 July 2023',
    stars: '★★★★★',
    avatarColor: '#4a1c1c',
    text: 'Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.'
  }
];

const Testimonials = () => {
  return (
    <Container 
      className="py-5 px-4 px-lg-5 position-relative" 
      style={{ 
        backgroundColor: '#F2F2F2',
        marginBottom: '-100px',
        zIndex: 10
      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 }
        }}
        autoplay={{ delay: 4500 }}
        className="pb-4"
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id}>
            <Card className="border-0 shadow-sm h-100 rounded-0">
              <Card.Body className="p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="rounded-circle" 
                      style={{ width: '45px', height: '45px', backgroundColor: review.avatarColor }}
                    ></div>
                    <div>
                      <h6 className="mb-0 text-dark" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                        {review.name}
                      </h6>
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                        {review.date}
                      </small>
                    </div>
                  </div>
                  <div className="text-warning" style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>
                    {review.stars}
                  </div>
                </div>
                <Card.Text className="text-muted flex-grow-1" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                  {review.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;