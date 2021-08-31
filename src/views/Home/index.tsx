import React from 'react';

import homeImage from '../../assets/images/home.png';
import './style.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left-child">
        <h3>Welcome Again</h3>
        <h6>Sign in to find your favorite music</h6>
        <button>Sign in</button>
      </div>
      <div className="home-right-child" style={{backgroundImage: `url(${ homeImage })`}} />
    </div>
  );
};
