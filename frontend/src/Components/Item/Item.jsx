import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { backend_url, currency } from '../../App';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item-card">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img className="item-image" src={backend_url + props.image} alt={props.name} />
      </Link>

      <p className="item-title">{props.name}</p>

      <div className="item-price-section">
        <span className="item-price-new">{currency}{props.new_price}</span>
        <span className="item-price-old">{currency}{props.old_price}</span>
      </div>

      <button className="item-cart-btn" onClick={() => addToCart(props.id)}>
        + Add to Cart
      </button>
    </div>
  );
};

export default Item;
