
import React from 'react';
import { cloth } from './Cloths';
import Card from './Card';
import './Card.css';

function Men() {

  const menData = cloth.find(
    (item) => item.category === "Men"
  );

  return (
    <div>
      {/* <h1>Men Collection</h1> */}

      <div className="product-container">
        {menData.products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}

export default Men;
