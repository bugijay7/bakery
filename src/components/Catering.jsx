import React from 'react';
import './catering.css'; // CSS for styling

function Catering() {
    return (
        <div className='services-container' id='services'>
            <h1>Our Services</h1>
            <div className="services-grid">
                {/* Catering Service */}
                <div className="service-card">
                    <h2>Catering Services</h2>
                    <p>
                        We offer catering services for all kinds of events, from weddings to corporate gatherings. 
                        Our wide selection of desserts, cakes, and baked goods will make your event extra special. 
                        Choose from a variety of sweet treats to fit your needs.
                    </p>
                </div>

                {/* Baking Classes */}
                <div className="service-card">
                    <h2>Baking Classes</h2>
                    <p>
                        Learn the art of baking with our expert-led classes. Whether you're a beginner or an experienced 
                        baker looking to enhance your skills, we offer hands-on classes for all levels. Join us and 
                        master the techniques behind our recipes.
                    </p>
                </div>

                {/* Custom Orders */}
                <div className="service-card">
                    <h2>Custom Orders</h2>
                    <p>
                        Have a unique vision for your cake or dessert? We specialize in 
                        creating custom cakes/desserts for birthdays, 
                        weddings, and other celebrations. Let us bring your sweet 
                        creations with personalized designs and flavors.
                    </p>
                </div>

                {/* Dessert Delivery */}
                <div className="service-card">
                    <h2>Dessert Delivery</h2>
                    <p>
                        Enjoy our delicious baked goods delivered straight to your door. We offer home delivery for 
                        our full menu of cakes, cookies, pastries, and more, ensuring you can enjoy our treats from 
                        the comfort of your home.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Catering;
