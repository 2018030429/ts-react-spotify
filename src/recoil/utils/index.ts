import { MutableSnapshot } from 'recoil';
import { keysAbleToSave } from '../../components/DebugObserver';
import { spotifyRefreshToken, spotifyTokenResponse } from '../auth/atoms';

const atomsToSave = [
  {
    key: keysAbleToSave[0],
    atom: spotifyRefreshToken
  },
  {
    key: keysAbleToSave[1],
    atom: spotifyTokenResponse
  }
];

export const initRecoilState = ({ set }:MutableSnapshot) => {
  const localStorageLength = localStorage.length;

  for (let i = 0; i < localStorageLength; i++) {
    const localStorageKey = localStorage.key(i);
    const indexOfKey = keysAbleToSave.indexOf(localStorageKey!);

    if (indexOfKey !== -1) {
      const atom = atomsToSave[indexOfKey].atom;
      set(atom, JSON.parse(localStorage.getItem(localStorageKey!)!)?.value ?? null);
    }
  }
}