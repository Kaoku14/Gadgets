import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


function Sales() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { session } = useContext(AuthContext);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('favorites')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.name!== item.name);
    setCartItems(updatedCartItems);
    localStorage.setItem('favorites', JSON.stringify(updatedCartItems));
  };

  const handleCheckout = () => {
    // Perform checkout logic (e.g., send order to server)
    alert("Thank you, come again.");
    navigate('/'); // Redirect to home or another appropriate page
  };

  const totalCharges = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="sales">
      <button className='briggs' onClick={() => navigate('/home')}>Home</button>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={item.name} className="cart-item">
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
              </div>
              <button onClick={() => handleRemoveFromCart(item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-actions">
          <button onClick={handleCheckout}>Checkout</button>
          <p>Total Charges: ${totalCharges.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Sales;