import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="logo-container">
            <h1 className="logo">PhoneZone</h1>
          </div>
          <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
            <div className={`hamburger ${showMenu ? 'open' : ''}`}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
            <li>
              <Link to="/" onClick={() => setShowMenu(false)}>Products</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShowMenu(false)}>About Us</Link>
            </li>
            <li>
              <button className="category-button" onClick={() => handleCategoryChange('')}>All</button>
            </li>
            <li>
              <button className="category-button" onClick={() => handleCategoryChange('Smartphone')}>Smartphones</button>
            </li>
            <li>
              <button className="category-button" onClick={() => handleCategoryChange('Laptop')}>Laptops</button>
            </li>
            <li>
              <button className="category-button" onClick={() => handleCategoryChange('PC')}>PCs</button>
            </li>
            <li>
              <button className="category-button" onClick={() => handleCategoryChange('Accessory')}>Accessories</button>
            </li>
            <li>
              <button className="category-button" onClick={() => handleCategoryChange('Repair Service')}>Repair Services</button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList selectedCategory={selectedCategory} />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
