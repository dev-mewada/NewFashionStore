
import React from 'react';
import { cloth } from './Cloths';
import Card from './Card';
import './Card.css';

function Women() {

  const womenData = cloth.find(
    (item) => item.category === "Women"
  );

  return (
    <div>
      {/* <h1>Women Collection</h1> */}

      <div className="product-container">
        {womenData.products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
}

export default Women;
