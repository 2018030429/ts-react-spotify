import React,{ memo } from 'react';
import ListItem from './ListItem';

import { Item } from './models/SpotifyResponse'

type Props = {
  album: Item
}

export default memo(function Album({ album }:Props) {
  return (
    <ListItem 
      imageUrl={album?.images[0].url}
      id={album.id} 
      name={album.name}
      artist={album?.artists[0].name!}
      releaseDate={album.release_date ? `${album.release_date}` : ''}
      externalUrl={album.external_urls.spotify}
    />
  );
});
