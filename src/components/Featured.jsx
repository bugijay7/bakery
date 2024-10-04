import React from 'react';
import './featured.css'; // Ensure the CSS file is updated accordingly

import carrotcake from '../assets/carrotcake.jpg';

function Featured() {
    return (
        <div className="featured-container" id='feature'>
               <div className="featured-image">
                <img src={carrotcake} alt="Carrot Cake" />
               </div>

               <div className="featured-description">

                <h2>Carrot Cake</h2>
                <p>
                    Our classic carrot cake is made with fresh, grated carrots, 
                    cinnamon, and nutmeg for a rich and moist texture. 
                    Topped with a smooth cream cheese frosting, this cake has a perfect balance 
                    of sweetness and spice. The ingredients include carrots, flour, eggs, 
                    sugar, cinnamon, nutmeg, and walnuts for that extra crunch.
                </p>

                <div className='moreinfo'>
                <figure>
                <h3>History</h3>
                <p>
                    Carrot cake has been a beloved dessert for centuries, with origins traced back to 
                    medieval times when carrots were used as a sweetener. Over the years, the 
                    recipe has evolved, incorporating various spices and toppings to create the 
                    delicious treat we enjoy today.
                </p>
                </figure>
                <figure>
                <h3>Serving Suggestions</h3>
                <p>
                    Serve our carrot cake at room temperature for the best flavor. It's perfect for 
                    special occasions like birthdays and anniversaries. Pair it with a cup of 
                    coffee or tea for a delightful afternoon treat.
                </p>
                </figure>
                <figure>
                <h3>Customer Reviews</h3>
                <div className="reviews">
                    <p>"Best carrot cake I've ever had! The texture is perfect, and the frosting is to die for." - Sarah J.</p>
                    <p>"Absolutely delicious! I order this for every family gathering." - Michael T.</p>
                </div>
                </figure>
                </div>
                <button onClick={() => window.location.href='/recipe'}>Get Full Recipe</button>
            </div>
        </div>
    
    );
}

export default Featured;
