import React from 'react';
import './bio.css';
import introback from '../assets/introback.jpg';

function Bio() {
    return (
        <div className='bio-container' id='about'>
            
            {/* Image Section */}
            <div className="bio-image">
                <img src={introback} alt="Dorcas" />
            </div>
            
            {/* Bio Information */}
            <div className="bio-content">
                <h1>Meet Dorcas</h1>
                
                <p>
                    Dorcas is a self-taught baker with a passion for creating delicious and beautiful baked goods. 
                    What started as a hobby quickly turned into a successful business.
                </p>
                
                <p>
                    Her love for experimenting with ingredients and perfecting recipes has made her the go-to baker 
                    for custom cakes, pastries, and breads in her community.
                </p>
                
                <p>
                    Today, Dorcas proudly runs her own bakery, turning her passion into a thriving business while 
                    continuing to innovate and bring joy through her creations.
                </p>
            </div>
        </div>
    );
}

export default Bio;
