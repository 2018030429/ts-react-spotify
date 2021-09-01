import { selector } from 'recoil';

import * as atms from './atoms';

export const filterType = selector({
  key: 'filterType',
  get: ({ get }) => {
    const atoms = [['album', get(atms.album)], ['artist', get(atms.artist)], ['episode', get(atms.episode)], ['playlist', get(atms.playlist)], ['track', true]];
    const notNullAtoms = atoms.filter(atom => atom[1]);

    return notNullAtoms.length ? notNullAtoms.map(atom => atom[0]).join(',') : null;
  },
  set: ({ set }) => {
    set(atms.album, false);
    set(atms.artist, false);
    set(atms.episode, false);
    set(atms.playlist, false);
  }
});
