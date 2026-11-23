
import React from 'react';
import './Card.css';

function Card({ item }) {
  return (
    <div className="product-card">

      <div className="product-card-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="product-card-info">
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
        <button>Add To Cart</button>
      </div>

    </div>
  );
}

export default Card;
