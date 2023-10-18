import React from 'react';
import './ProductCard.css';

function ProductCard({ img, title, price, children }) {
  return (
    <div className="product-card">
      <img src={img} alt="img" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">${price}</p>
      <div className="product-description">{children}</div>
    </div>
  );
}

export default ProductCard;
