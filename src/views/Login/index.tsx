import React, { useCallback, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { useHistory, useLocation } from 'react-router-dom';

import { 
  isAuthenticated as isAuthenticatedAtom, 
  spotifyRefreshToken as spotifyRefreshTokenAtom,
  spotifyTokenResponse as spotifyTokenResponseAtom 
} from '../../recoil/auth/atoms';
import { spotifyAuthCall } from '../../utils';
import homeImage from '../../assets/images/home.png';
import './style.css';

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_CALLBACK_HOST}&scope=user-read-private`;

export default function Login() {
  const location = useLocation();
  const [, setIsAuthenticated] = useRecoilState(isAuthenticatedAtom);
  const [spotifyTokenResponse, setSpotifyTokenResponse] = useRecoilState(spotifyTokenResponseAtom);
  const [spotifyRefreshToken, setSpotifyRefreshToken] = useRecoilState(spotifyRefreshTokenAtom);
  const history = useHistory();
  
  const authenticateUser = useCallback(async (code:string) => {
    try {
      let response;
  
      if (spotifyRefreshToken) {
        response = await spotifyAuthCall({ refresh_token: spotifyRefreshToken, grant_type: 'refresh_token' });
      } else {
        response = await spotifyAuthCall({ code, grant_type: 'authorization_code' });
      }
      
      if (response.access_token) {
        setSpotifyRefreshToken(response?.refresh_token);
        setSpotifyTokenResponse(response);
        setIsAuthenticated(true);

        history.replace('/home');
      } else {
        throw new Error('Failed authorization');
      }

    } catch (error) {
      console.error(error);
      setSpotifyRefreshToken('');
      setSpotifyTokenResponse('');
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
