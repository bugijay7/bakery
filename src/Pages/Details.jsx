import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Ensure this path is correct
import { useParams } from 'react-router-dom';
import products from '../data';
import './details.css';

const Details = () => {
    const { productId } = useParams(); // Get the productId from the route parameters
    const { addToCart } = useContext(CartContext); // Check this line

    const product = products.find(p => p.id === parseInt(productId, 20)); // Find the product by id

    if (!product) {
        return <div>Product not found</div>; // Show a message if product is not found
    }

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className='details-container'>
            <img src={product.image} alt={product.name} className='details-image' />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className='detail-price'>Price: ${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart} className='add-to-cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Details;
