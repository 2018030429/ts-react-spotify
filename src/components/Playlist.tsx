import React, { memo } from 'react';
import ListItem from './ListItem';

import holder from '../assets/images/playlistph.png';

import { Item } from './models/SpotifyResponse'

type Props = {
  playlist: Item
}

export default memo(function Playlist({ playlist }:Props) {
  return (
    <ListItem
      imageUrl={playlist.images[0]?.url ?? `${holder}`}
      id={playlist.id} 
      name={playlist.description ?? ''}
      artist={playlist.name}
      releaseDate={playlist.release_date ? `${playlist.release_date}` : ''}
      externalUrl={playlist.external_urls.spotify} 
    />
  );
});
