
import React from 'react';
import { cloth } from './Cloths';
import Card from './Card';
import './Card.css';

function Kids() {

  const kidsData = cloth.find(
    (item) => item.category === "Kids"
  );

  return (
    <div>
      {/* <h1>Kids Collection</h1> */}

      <div className="product-container">
        {kidsData.products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}

export default Kids;
