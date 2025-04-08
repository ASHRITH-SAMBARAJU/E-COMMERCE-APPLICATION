import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-tabs">
        <button
          className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (122)
        </button>
      </div>

      <div className="descriptionbox-content">
        {activeTab === "description" ? (
          <div className="description-text">
            <p>
              An e-commerce website is a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions seamlessly.
            </p>
            <p>
              It offers a convenient and accessible shopping experience with detailed product listings, images, pricing, and customization options like sizes or colors. Its global reach and 24/7 availability make it a key player in modern retail.
            </p>
          </div>
        ) : (
          <div className="reviews-section">
            <p><strong>⭐️⭐️⭐️⭐️⭐️</strong> — "Amazing platform with top-quality products!"</p>
            <p><strong>⭐️⭐️⭐️⭐️</strong> — "Smooth experience and great customer service."</p>
            <p><strong>⭐️⭐️⭐️⭐️⭐️</strong> — "Love the variety and fast shipping!"</p>
            {/* You can map actual reviews here if connected to backend */}
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
