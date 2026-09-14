import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="border-0 h-100 bg-transparent">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ height: '380px', objectFit: 'cover' }} 
          className="rounded-0" 
        />
        <div 
          className="position-absolute top-0 end-0 m-2 bg-teal text-white px-2 py-1 rounded" 
          style={{ fontSize: '0.85rem' }}
        >
          ★ {product.rating}
        </div>
      </div>
      <Card.Body className="px-0 pt-3 pb-0">
        <p className="text-muted mb-1" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          PRODUCT CATEGORY
        </p>
        <Card.Title className="fs-4 mb-2" style={{ fontFamily: 'Times New Roman' }}>
          {product.name}
        </Card.Title>
        <Card.Text className="text-muted">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;