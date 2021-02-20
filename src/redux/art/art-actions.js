import ArtActionTypes from './art-types';

export const addArt = (art) => ({
  type: ArtActionTypes.ADD_ART_TO_CART,
  payload: art
});