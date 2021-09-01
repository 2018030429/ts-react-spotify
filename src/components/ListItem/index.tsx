import React from 'react';
import './style.css';

type Props = {
  imageUrl: string,
  id: string,
  externalUrl: string,
  onClick: (externalUrl:string) => void,
  releaseDate: string,
  name: string,
  artist: string
}

export default React.memo(function ListItem({ imageUrl, id, name, artist, releaseDate, onClick, externalUrl }:Props) {
  return (
    <div className="list-item" onClick={() => onClick(externalUrl)}>
      <img src={imageUrl} alt={id} />
      <p className="list-item-title">{name}</p>
      <p className="list-item-artist">{artist}</p>
      <p className="list-item-release-date">{releaseDate}</p>
    </div>
  )
});
