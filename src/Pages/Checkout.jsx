import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './checkout.css'; // Create and style this CSS file as needed

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic for processing the order (e.g., API call)
    alert(`Order placed successfully for ${name} with total price: $${totalPrice.toFixed(2)}`);
  };

  return (
    <div className='checkout-container'>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className='checkout-form'>
        <h2>Billing Information</h2>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Shipping Address:</label>
          <textarea
            id='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <h2>Payment Method</h2>
        <div className='form-group'>
          <label>
            <input
              type='radio'
              value='Credit Card'
              checked={paymentMethod === 'Credit Card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit Card
          </label>
          <label>
            <input
              type='radio'
              value='Mpesa'
              checked={paymentMethod === 'Mpesa'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Lipa na Mpesa
          </label>
        </div>

        <h2>Order Summary</h2>
        <ul className='order-summary'>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>

        <button type='submit' className='checkout-button'>Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
