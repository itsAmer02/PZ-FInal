import React, { useState, useEffect } from 'react';
import Product from './Product';
import products from './products.js';

function ProductList({ selectedCategory }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Perform search only after a short delay to avoid excessive updates
    }, 300); // Adjust delay as needed

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedCategory || product.category === selectedCategory)
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
