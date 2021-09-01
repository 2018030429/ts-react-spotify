import React from 'react';
import './style.css';

import * as atoms from '../../recoil/songs/atoms';
import { useRecoilState } from 'recoil';

export default function HomeFilters() {
  const [album, setAlbum] = useRecoilState(atoms.album);
  const [track, setTrack] = useRecoilState(atoms.track);
  const [artist, setArtist] = useRecoilState(atoms.artist);
  const [episode, setEpisode] = useRecoilState(atoms.episode);
  const [playlist, setPlaylist] = useRecoilState(atoms.playlist);

  return (
    <div className="home-filters">
      <label>
        Album
        <input 
          type="checkbox" 
          name="album" 
          checked={album} 
          onChange={({target}) => setAlbum(target.checked? true : false)} />
      </label>
      <label>
        Artist
        <input 
          type="checkbox" 
          name="artist" 
          checked={artist} 
          onChange={({target}) => setArtist(target.checked? true : false)} />
      </label>
      <label>
        Playlist
        <input 
          type="checkbox" 
          name="playlist" 
          checked={playlist} 
          onChange={({target}) => setPlaylist(target.checked? true : false)} />
      </label>
      <label>
        Track
        <input 
          type="checkbox" 
          name="track" 
          checked={track} 
          onChange={({target}) => setTrack(target.checked? true : false)} />
      </label>
      <label>
        Episode
        <input 
          type="checkbox" 
          name="episode" 
          checked={episode} 
          onChange={({target}) => setEpisode(target.checked? true : false)} />
      </label>
    </div>
  );
};
