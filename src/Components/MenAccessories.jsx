
import React from 'react';
import { cloth } from './Cloths';
import Card from './Card';
import './Card.css';

function MenAccessories() {

  const data = cloth.find(
    (item) => item.category === "Men Accessories"
  );

  return (
    <div>
      {/* <h1>Men Accessories</h1> */}

      <div className="product-container">
        {data.products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}

export default MenAccessories;
