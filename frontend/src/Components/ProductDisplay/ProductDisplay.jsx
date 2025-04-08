import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import { CheckCircle } from "lucide-react";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const showToast = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2500);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToast("❗ Please select your size");
      return;
    }
    addToCart(product.id, quantity);
    showToast(`Added ${quantity} ${product.name} to cart`);
  };

  const handleAddToFavorites = () => {
    showToast(`Added ${product.name} to favorites`);
  };

  return (
    <div className="productdisplay-modern">
      <div className="productdisplay-modern-left">
        <img
          className="productdisplay-modern-main-img"
          src={backend_url + product.image}
          alt={product.name}
        />
        <div className="productdisplay-modern-thumbnails">
          <img src={backend_url + product.image} alt="thumb1" />
          <img src={backend_url + product.image} alt="thumb2" />
        </div>
      </div>

      <div className="productdisplay-modern-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-modern-stars">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>

        <h2 className="productdisplay-modern-price">
          {currency}
          {product.new_price}
        </h2>

        <p className="productdisplay-modern-description">
          {product.description}
        </p>

        <div className="productdisplay-modern-size">
          <h3>Select Size</h3>
          <div className="size-options">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="productdisplay-modern-quantity">
          <label>Quantity:</label>
          <div className="qty-buttons">
            <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>–</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
        </div>

        <div className="button-stack">
          <button className="btn-action" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
          <button className="btn-action" onClick={handleAddToFavorites}>
            🤍 Add to Favorites
          </button>
        </div>

        {message && (
          <div className={`toast-message ${message.includes("❗") ? "error" : "success"}`}>
            <CheckCircle size={16} className="toast-icon" />
            {message}
          </div>
        )}

        <p className="productdisplay-modern-stock">
          In Stock: {product.stock || 25} units
        </p>

        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category || "General"}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
