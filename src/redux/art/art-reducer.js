import ArtActionTypes from './art-types';

const INITIAL_STATE = {
  artItems: []
};

const artReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtActionTypes.ADD_ART_TO_CART:
      return {
        ...state,
        artItems: [...state.artItems, action.payload]
      };
    default:
      return state;
  }
};

export default artReducer;