import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SalesPage() {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct;

  useEffect(() => {
    // Load cart items from local storage on component mount
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setCartItems(JSON.parse(storedFavorites));
    } else {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever cart items change
    localStorage.setItem('favorites', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to handle adding an item to the cart
  const handleAddToCart = (product) => {
    // If the product already exists in the cart, increase the quantity
    const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);
    if (existingItemIndex!== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      // Otherwise, add the product to the cart with a quantity of 1
      setCartItems([...cartItems, {...product, quantity: 1 }]);
    }
  };

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  // Function to calculate the total price of the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <div>
          <h3>Total Price: ${calculateTotalPrice()}</h3>
          <button onClick={() => handleAddToCart(selectedProduct)}>Add More</button>
        </div>
      )}
    </div>
  );
}

export default SalesPage;