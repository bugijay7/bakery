import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'; 
import banner from '../assets/banner4.jpg'

function Banner() {
  return (
    <div className="banner">
        <div className="banner-content">
        <h1 className="banner-title">The Cozy Oven</h1>
        <p className="banner-slogan">Where Every Bite Feels Like Home</p>
        <Link to="/products" className="button">
          Explore Our Products
        </Link>
      </div>
      <div className='banner-image'>
      <img className='bannerimg' src={banner} />
      </div>
    </div>
  );
}

export default Banner;
