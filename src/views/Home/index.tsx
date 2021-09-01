import React, { useState } from 'react';
import './style.css';

import { useRecoilState } from 'recoil';
import { spotifyResult } from '../../recoil/songs/atoms'
import { spotifyTokenResponse } from '../../recoil/auth/atoms';
import seekerImage from '../../assets/images/seeker.png';
import { spotifySearchCall } from '../../utils'
import HomeFilters from '../../components/HomeFilters'

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [tokenResponse] = useRecoilState<any>(spotifyTokenResponse);
  const [searchResponse, setSearchResponse] = useRecoilState(spotifyResult);

  const handleSearchClick = async () => {
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
    const response = await spotifySearchCall(params, tokenResponse.access_token);
    setSearchResponse(response);
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
      <HomeFilters />
    </div>
  );
}
