import React, { useCallback, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';

import { 
  isAuthenticated as isAuthenticatedAtom, 
  spotifyRefreshToken as spotifyRefreshTokenAtom,
  spotifyTokenResponse as spotifyTokenResponseAtom 
} from '../../recoil/auth/atoms';
import { spotifyAuthCall } from '../../utils';
import homeImage from '../../assets/images/home.png';
import './style.css';

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_CALLBACK_HOST}&scope=user-read-private`;

export default function Home() {
  const location = useLocation();
  const [, setIsAuthenticated] = useRecoilState(isAuthenticatedAtom);
  const [spotifyTokenResponse, setSpotifyTokenResponse] = useRecoilState(spotifyTokenResponseAtom);
  const [spotifyRefreshToken, setSpotifyRefreshToken] = useRecoilState(spotifyRefreshTokenAtom);
  
  const authenticateUser = useCallback(async (code:string) => {
    try {
      let response;
  
      if (spotifyRefreshToken) {
        response = await spotifyAuthCall({ refresh_token: spotifyRefreshToken });
      } else {
        response = await spotifyAuthCall({ code });
      }
  
      setSpotifyRefreshToken(response?.refresh_token);
      setSpotifyTokenResponse(response);
      setIsAuthenticated(true);
      console.log(response);

      // TODO: redirect to search page
    } catch (error) {
      console.error(error);
    }
  }, [setSpotifyRefreshToken, setSpotifyTokenResponse, setIsAuthenticated, spotifyRefreshToken]);
  
  useEffect(() => {
    const urlParms = new URLSearchParams(location.search);
    const spotifyCode = urlParms.get("code");
    spotifyCode && authenticateUser(spotifyCode);
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
