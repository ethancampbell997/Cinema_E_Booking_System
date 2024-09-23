import React from 'react';
import { useEffect, useRef } from 'react';
import './HeroSection.css';

import Banner from '../images/banners/br2049.png';
import BR from '../images/BR.png';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.background = `url(${Banner}) center center / cover no-repeat`;
    }
  }, []);
  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-content">
        <img src = {BR} alt={'Blade Runner 2049'} />
        <button>Get Tickets</button>
      </div>
    </section>
  );
};

export default HeroSection;