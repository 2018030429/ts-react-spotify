import React from 'react';
import './style.css';

import seekerImage from '../../assets/images/seeker.png';

export default function Home() {
  return (
    <div className="home">
      <div style={{backgroundImage: `url(${seekerImage})`}} className="home-cover-container" />
      <h2 className="home-title">Search your favorite song!</h2>
      <div className="home-searchbox">
        <input type="text" className="home-searchbox-input" />
        <button className="home-searchbox-button">Search</button>
      </div>
    </div>
  );
}