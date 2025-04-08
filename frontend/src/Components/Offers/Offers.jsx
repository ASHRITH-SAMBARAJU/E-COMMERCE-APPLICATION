import React from "react";
import "./Offers.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Offers = () => {
  return (
    <div
      className="offers"
      style={{
        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1673502752899-04caa9541a5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="offers-overlay"></div>

      <motion.div
        className="offers-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="offers-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Exclusive Offers For You
        </motion.h1>

        <motion.p
          className="offers-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          ONLY ON BEST SELLERS PRODUCTS
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link to="/mens" className="offers-button">
            Check Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Offers;
