import React, { useContext } from "react";
import "./Fav.css";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import { useNavigate } from "react-router-dom";

const Fav = () => {
  const { products, favorites, removeFromFavorites, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="fav-page">
      <h2>Your Favorites</h2>
      <div className="fav-container">
        {products.map((item) =>
          favorites.includes(item.id) ? (
            <div className="fav-card" key={item.id}>
              <img
                src={backend_url + item.image}
                alt={item.name}
                className="fav-img"
                onClick={() => navigate(`/product/${item.id}`)}
              />
              <h4>{item.name}</h4>
              <p>{currency}{item.new_price}</p>
              <div className="fav-actions">
                <button onClick={() => addToCart(item.id)}>Add to Cart</button>
                <button className="remove-btn" onClick={() => removeFromFavorites(item.id)}>Remove</button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Fav;
