import { combineReducers } from 'redux';
import { SET_PLACEMENTS, SET_DELIVERY, SET_LOADING } from './actions';

const initialState = {
  placements: [],
  delivery: {},
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACEMENTS:
      return { ...state, placements: action.payload };
    case SET_DELIVERY:
      return { ...state, delivery: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Reducer,
});

export default rootReducer;
