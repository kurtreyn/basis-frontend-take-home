import { combineReducers } from 'redux';
import { SET_PLACEMENTS, SET_IMPRESSIONS, SET_LOADING } from './actions';

const initialState = {
  placements: [],
  impression: [],
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACEMENTS:
      return { ...state, placements: action.payload };
    case SET_IMPRESSIONS:
      return { ...state, impressions: action.payload };
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
