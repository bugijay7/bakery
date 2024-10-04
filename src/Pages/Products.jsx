import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data';
import './products.css'; // Ensure this file contains styles consistent with details.css

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filterProducts = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className='products-container'>
            <div className='category-buttons'>
                <button onClick={() => filterProducts('All')}>All</button>
                <button onClick={() => filterProducts('Cakes')}>Cakes</button>
                <button onClick={() => filterProducts('Pastries')}>Pastries</button>
                <button onClick={() => filterProducts('Breads')}>Breads</button>
                <button onClick={() => filterProducts('Cookies')}>Cookies</button>
            </div>

            <div className='product-list'>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className='product-card'>
                            <img src={product.image} alt={product.name} className='product-image' />
                            <h3 className='product-name'>{product.name}</h3>
                            <p className='product-price'>${product.price.toFixed(2)}</p>
                            <Link to={`/details/${product.id}`}>
                                <button className='more-info-btn'>More Info</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>
        </div>
    );
}

export default Products;
