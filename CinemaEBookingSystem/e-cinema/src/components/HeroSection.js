import React from 'react';
import './HeroSection.css';

import BR from '../images/BR.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src = {BR} alt={'Blade Runner 2049'} />
        <button>Get Tickets</button>
      </div>
    </section>
  );
};

export default HeroSection;