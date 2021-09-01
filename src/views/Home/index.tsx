import React, { useState } from 'react';
import './style.css';

import { useRecoilState, useResetRecoilState } from 'recoil';
import { spotifyResult } from '../../recoil/songs/atoms'
import { spotifyTokenResponse } from '../../recoil/auth/atoms';
import seekerImage from '../../assets/images/seeker.png';
import { spotifySearchCall } from '../../utils'
import HomeFilters from '../../components/HomeFilters'
import { filterType as filterTypeSelector } from '../../recoil/songs/selectors';
import { SpotifyResponse } from '../../components/models/SpotifyResponse';
import Track from '../../components/Track';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [tokenResponse] = useRecoilState<any>(spotifyTokenResponse);
  const [searchResponse, setSearchResponse] = useRecoilState<SpotifyResponse>(spotifyResult);
  const [filterType] = useRecoilState(filterTypeSelector);
  const resetfilter = useResetRecoilState(filterTypeSelector);

  const handleSearchClick = async () => {
    let type = filterType ?? 'track';

    const params = [
      {
        q: searchText
      }, 
      {
        type 
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
      <button className="home-clean-filters-button" onClick={resetfilter}>
        Clear Filters
      </button>
      <div className="home-tracks-container">
        <p>Songs</p>
        <div className="home-tracks-container-items">
          { searchResponse?.tracks?.items.map((track, i) => <Track key={i} track={track} />) }
        </div>
      </div>
    </div>
  );
}
