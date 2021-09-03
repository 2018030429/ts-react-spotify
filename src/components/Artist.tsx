import React, { memo } from 'react';
import ListItem from './ListItem';

import holder from '../assets/images/holder.png';

import { Item } from './models/SpotifyResponse'

type Props = {
  artist: Item
}

export default memo(function Artist({ artist }:Props) {
  return (
    <ListItem 
      imageUrl={artist.images[0]?.url ?? `${holder}`}
      id={artist.id} 
      name={artist.name}
      artist={artist.name}
      releaseDate={""}
      externalUrl={artist.external_urls.spotify}
    />
  );
});
