import React, { useContext, useRef } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';
import search_icon from '../Assets/search_icon.png'; // Use proper import for search icon

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  const getActiveMenu = () => {
    if (path === '/') return 'home';
    else if (path.includes('mens')) return 'mens';
    else if (path.includes('women')) return 'women'; // Fixed this
    else if (path.includes('kids')) return 'kids';
    else if (path.includes('about')) return 'about';
    else if (path.includes('contact')) return 'contact';
    else return '';
  };

  const activeMenu = getActiveMenu();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='nav'>
      {/* Back and Forward Arrows */}
      <div className="nav-arrows">
        <button onClick={() => navigate(-1)} className="nav-arrow-btn">←</button>
        <button onClick={() => navigate(1)} className="nav-arrow-btn">→</button>
      </div>

      {/* Logo */}
      <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Zestora</p>
      </Link>

      {/* Dropdown for mobile */}
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="menu" />

      {/* Menu Links */}
      <ul ref={menuRef} className="nav-menu">
        <li>
          <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
          {activeMenu === "home" && <hr className="nav-underline" />}
        </li>
        <li>
          <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
          {activeMenu === "mens" && <hr className="nav-underline" />}
        </li>
        <li>
          <Link to='/women' style={{ textDecoration: 'none' }}>Women</Link>
          {activeMenu === "women" && <hr className="nav-underline" />}
        </li>
        <li>
          <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>
          {activeMenu === "kids" && <hr className="nav-underline" />}
        </li>
        <li>
          <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
          {activeMenu === "about" && <hr className="nav-underline" />}
        </li>
        <li>
          <Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link>
          {activeMenu === "contact" && <hr className="nav-underline" />}
        </li>
      </ul>

      {/* Search Bar */}
      <div className="nav-search-wrapper">
        <input type="text" placeholder="Search products..." />
        <img src={search_icon} alt="search" className="search-icon" />
      </div>

      {/* Login/Logout and Cart */}
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button
            onClick={() => {
              localStorage.removeItem('auth-token');
              window.location.replace('/');
            }}
          >
            Logout
          </button>
        ) : (
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
