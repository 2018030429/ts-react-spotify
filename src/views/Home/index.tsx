import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import homeImage from '../../assets/images/home.png';
import './style.css';

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_CALLBACK_HOST}&scope=user-read-private`;

export default function Home() {
  const location = useLocation();
  
  useEffect(() => {
    const urlParms = new URLSearchParams(location.search);
    const spotifyCode = urlParms.get("code");
  }, [location.search]);

  const handleLoginClick = () => {
    window.location.replace(spotifyUrl);
  };

  return (
    <div className="home-container">
      <div className="home-left-child">
        <h3>Welcome Again</h3>
        <h6>Sign in to find your favorite music</h6>
        <button onClick={handleLoginClick}>Sign in</button>
      </div>
      <div className="home-right-child" 
        style={{backgroundImage: `url(${ homeImage })`}} 
      />
    </div>
  );
};
