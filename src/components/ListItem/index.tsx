import React from 'react';
import './style.css';

type Props = {
  imageUrl: string,
  id: string,
  externalUrl: string,
  releaseDate: string,
  name: string,
  artist: string
}

export default React.memo(function ListItem({ imageUrl, id, name, artist, releaseDate, externalUrl }:Props) {
  const handleListItemClick = () => {
    window.open(externalUrl, '_blank')
  };

  return (
    <div className="list-item" onClick={handleListItemClick}>
      <img src={imageUrl} alt={id} />
      <p className="list-item-title">{name.length > 20 ? `${name.slice(0, 25)}...` : name}</p>
      <p className="list-item-artist" >{artist}</p>
      <p className="list-item-release-date">{releaseDate}</p>
    </div>
  )
});
