import React from 'react';
import { Link } from 'react-router-dom';  // Ensure this import is present

import './Places.css';  // Ensure the CSS file is correctly imported

const Places = () => {
  const places = [
    { 
      src: 'https://tse2.mm.bing.net/th?id=OIP.NGvPSNjLG0efnq-uPg6L_wHaE9&pid=Api&P=0&h=220', 
      alt: 'Manali', 
      description: 'Perfect for photos that showcase the natural beauty of Manali and its surroundings.',
      details: 'A beautiful beach that stretches along the coast with golden sand and clear waters. Perfect for swimming, sunbathing, and relaxing.',
    },
    { 
      src: 'https://tse4.mm.bing.net/th?id=OIP.Jz8v8XeYDWuw-cKFAo9UOgHaFj&pid=Api&P=0&h=220', 
      alt: 'Ooty', 
      description: 'A mountain retreat with stunning views.',
      details: 'An idyllic mountain retreat surrounded by towering peaks. Ideal for nature lovers, with hiking trails and panoramic views.',
    },
    { 
      src: 'https://tse2.mm.bing.net/th?id=OIP.oTsnbr9UGnN-ehObkt9KRAHaEK&pid=Api&P=0&h=220', 
      alt: 'Kerala', 
      description: 'A historic city with ancient architecture.',
      details: 'Step back in time and explore the ancient ruins, historical buildings, and vibrant culture of this historic city.',
    },
    // Add other places similarly...
  ];

  return (
    <div className="places">
      <h2>Popular Places</h2>
      <div className="cards-container">
        {places.map((place) => (
          <div key={place.alt} className="place-card">
            <img src={place.src} alt={place.alt} />
            <div className="place-card-info">
              <h3>{place.alt}</h3>
              <p>{place.description}</p>
              <Link to={`/book-now/${place.alt}`} className="book-now-button">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
