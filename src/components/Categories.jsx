import React from 'react';
import { useNavigate } from 'react-router-dom';
import './categories.css';
import cakes from '../../src/assets/cakes.jpeg'
import pastries from '../../src/assets/pastries.jpeg'
import bread from '../../src/assets/bread.jpeg'
import cookies from '../../src/assets/cookies.jpeg'

function Categories() {
    const navigate = useNavigate();

    // Data for the categories
    const categories = [
        { id: 1, name: 'Cakes', image: cakes },
        { id: 2, name: 'Pastries', image: pastries },
        { id: 3, name: 'Breads', image: bread},
        { id: 4, name: 'Cookies', image: cookies}
    ];

    // Function to navigate to the Products page with the selected category filter
    const handleMoreClick = (category) => {
        navigate(`/products?category=${category}`);
    };

    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <div key={category.id} className='category-card'>
                    <img src={category.image} alt={category.name} className='category-image' />
                    <h3>{category.name}</h3>
                    <button onClick={() => handleMoreClick(category.name)}>More</button>
                </div>
            ))}
        </div>
    );
}

export default Categories;
