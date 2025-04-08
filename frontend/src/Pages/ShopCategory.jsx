import React, { useEffect, useState, useCallback } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState(props.category || "All");

  const categories = ["All", "Jackets", "Suits", "Shoes", "Shirts", "Trousers", "Accessories"];

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setSortedProducts(data);
      });
  }, []);

  useEffect(() => {
    setSelectedCategory(props.category); // sync with props.category if changed
  }, [props.category]);

  const sortProducts = (order, products) => {
    return [...products].sort((a, b) =>
      order === "asc" ? a.new_price - b.new_price : b.new_price - a.new_price
    );
  };

  const filterProducts = useCallback(() => {
    let filtered;

    if (selectedCategory === "All") {
      filtered = allProducts;
    } else {
      filtered = allProducts.filter((product) => product.category === selectedCategory);
    }

    const sorted = sortProducts(sortOrder, filtered);
    setSortedProducts(sorted);
  }, [allProducts, selectedCategory, sortOrder]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="Category Banner" />

      <div className="shopcategory-container">
        {/* Sidebar for Categories */}
        <div className="shopcategory-sidebar">
          <h3>Categories</h3>
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="shopcategory-main">
          <div className="shopcategory-filters-top">
            <div className="shopcategory-sort">
              Sort by
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="shopcategory-products">
            {sortedProducts.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
          </div>

          <div className="shopcategory-loadmore">
            <Link to="/" style={{ textDecoration: "none" }}>
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
