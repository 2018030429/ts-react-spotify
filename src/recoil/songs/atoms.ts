import { atom } from "recoil";

export const spotifyResult = atom({
  key: 'spotifyResult',
  default: {}
});

export const album = atom({
  key: 'album',
  default: false
});

export const artist = atom({
  key: 'artist',
  default: false
});

export const playlist = atom({
  key: 'playlist',
  default: false
});

export const episode = atom({
  key: 'episode',
  default: false
});

