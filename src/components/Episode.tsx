import React, { memo } from 'react';
import ListItem from './ListItem';

import holder from '../assets/images/episodeph.png';

import { Item } from './models/SpotifyResponse'

type Props = {
  episode: Item
}

export default memo(function Episode({ episode }:Props) {
  return (
    <ListItem 
      imageUrl={episode.images[0]?.url ?? `${holder}`}
      id={episode.id} 
      name={episode?.description ?? ''}
      artist={episode.name}
      releaseDate={`${episode.release_date}`}
      externalUrl={episode.external_urls.spotify}
    />
  );
});
