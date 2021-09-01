import React from 'react'
import ListItem from './ListItem';

import { Item } from './models/SpotifyResponse'

type Props = {
  track: Item
}

export default React.memo(function Track({ track }:Props) {
  return (
    <ListItem 
      imageUrl={track.album?.images[0].url!}
      id={track.id} 
      name={track.name}
      artist={track?.artists[0].name!}
      releaseDate={track.album?.release_date!}
      onClick={() => {}}
      externalUrl={track.external_urls.spotify} />
  )
})