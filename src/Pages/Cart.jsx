import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './cart.css';

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize navigate

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        navigate('/checkout'); // Navigate to the Checkout page
    };

    return (
        <div className='cart-container'>
            <h1>Shopping Cart</h1>
            
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className='cart-items'>
                        {cartItems.map(item => (
                            <li key={item.id} className='cart-item'>
                                <img src={item.image} alt={item.name} className='cart-item-image' />
                                <div className='cart-item-details'>
                                    <h2 className='cart-item-name'>{item.name}</h2>
                                    <p className='cart-item-price'>${item.price.toFixed(2)}</p>
                                    <p className='cart-item-quantity'>Quantity: {item.quantity}</p>
                                </div>
                                <button 
                                    className='remove-item-button' 
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    
                    <div className='cart-summary'>
                        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                        <button className='checkout-button' onClick={handleCheckout}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
