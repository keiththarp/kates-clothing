import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import artReducer from './art/art-reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  art: artReducer
})