import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img 
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
        alt="Hero Background" 
        className="hero-img"
      />
      <div className="hero-content-box">
        <h1>Learning that gets you</h1>
        <p>Skills for your present (and your future). Get started with us.</p>
      </div>
    </section>
  );
};

export default Hero;