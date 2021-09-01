import React, { useState } from 'react';
import './style.css';

import { spotifyTokenResponse } from '../../recoil/auth/atoms';
import seekerImage from '../../assets/images/seeker.png';
import { useRecoilState } from 'recoil';
import { spotifySearchCall } from '../../utils'

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [tokenResponse] = useRecoilState<any>(spotifyTokenResponse);
  const handleSearchClick = async () => {
    // TODO: execute to spotify api
    const params = [
      {
        q: searchText
      }, 
      {
        type: 'track,artist'
      },
      {
        offset: 50
      }
    ]
    const searchResponse = await spotifySearchCall(params, tokenResponse.access_token);
    console.log(searchResponse)
  }

  return (
    <div className="home">
      <div style={{backgroundImage: `url(${seekerImage})`}} className="home-cover-container" />
      <h2 className="home-title">Search your favorite song!</h2>
      <div className="home-searchbox">
        <input type="text" className="home-searchbox-input" 
          value={searchText} onChange={({target:{value}}) => setSearchText(value)} />
        <button className="home-searchbox-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
}
