
import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const {
    products,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    clearCart,
  } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePromoCode = () => {
    if (promoCode === "FREE50") {
      setDiscount(0.5);
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Order placed successfully!");
    }, 2000);
  };

  const getDiscountedTotal = () => {
    const total = getTotalCartAmount();
    return total - total * discount;
  };

  return (
    <div className="cartitems">
      {/* Top buttons */}
      <div className="cartitems-top-btns">
        <button onClick={() => navigate("/favorites")}>
          <i className="fa-regular fa-heart"></i> View Favorites
        </button>
        <button onClick={clearCart}>
          <i className="fa-solid fa-trash"></i> Clear Cart
        </button>
      </div>

      <div className="cartitems-product-section">
        {/* Left Section */}
        <div className="cartitems-left">
          <div className="cartitems-container">
            {products.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <div className="cartitem-box" key={item.id}>
                    <img
                      className="cartitem-image"
                      src={backend_url + item.image}
                      alt={item.name}
                      onClick={() => navigate(`/product/${item.id}`)}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="cartitem-info">
                      <p className="cartitem-title">{item.name}</p>
                      <p className="cartitem-category">{item.category || "Product"}</p>
                      <div className="cartitem-quantity">
                        <button className="qty-btn" onClick={() => removeFromCart(item.id)}>-</button>
                        <span>{cartItems[item.id]}</span>
                        <button className="qty-btn">+</button>
                      </div>
                      <p style={{ fontSize: "14px", fontWeight: "500" }}>
                        {currency}{item.new_price * cartItems[item.id]}
                      </p>
                    </div>
                    <div className="cartitem-actions">
                      <button className="black-btn">
                        <i className="fa-regular fa-heart"></i> Favorite
                      </button>
                      <button className="black-btn" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Right Section */}
        <div className="cartitems-right">
          <h2>Order Summary</h2>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>{currency}{getTotalCartAmount()}</p>
          </div>
          <div className="cartitems-total-item">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="cartitems-total-item">
            <p>Promo Discount</p>
            <p>-{currency}{(getTotalCartAmount() * discount).toFixed(2)}</p>
          </div>
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>{currency}{getDiscountedTotal().toFixed(2)}</h3>
          </div>
          <button onClick={handleCheckout} disabled={loading}>
            {loading ? "Processing..." : "Proceed to Checkout"}
          </button>

          {/* Promo Code Section */}
          <div className="cartitems-promocode">
            <p style={{ marginTop: "20px", fontSize: "13px" }}>Have a promo code?</p>
            <div className="cartitems-promobox">
              <input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handlePromoCode}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
