import React from 'react';

function Product({ name, category, price, image, description, condition }) {
  const whatsappMessage = encodeURIComponent(`${name}, Price: $${price}, Condition: ${condition}`);
  const whatsappUrl = `https://wa.me/+916361375404?text=${whatsappMessage}`;

  const displayImage = (imageUrl, altText) => {
    return (
      <img
        src={imageUrl}
        alt={altText}
        style={{ maxWidth: '100%', height: 'auto' }}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150';
        }}
      />
    );
  };

  return (
    <div className="product">
      {displayImage(image, name)}
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>Condition: {condition}</p>
      <p>{description}</p>
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
}

export default Product;
