import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import { backend_url } from '../../App';

const RelatedProducts = ({ category, id }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`${backend_url}/relatedproducts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: category }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Related Products:", data); // 🔍 Debug log
        setRelated(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [category]); // ✅ Dependency added

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {related.map((item, index) => {
          // ✅ Logging each item to catch invalid fields
          console.log("Rendering item:", item);

          if (id !== item.id && item.name && item.image) {
            return (
              <Item
                key={item.id || index}
                id={item.id}
                name={String(item.name)} // ✅ Force string
                image={String(item.image)} // ✅ Force string
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null; // ✅ Always return something
          }
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
