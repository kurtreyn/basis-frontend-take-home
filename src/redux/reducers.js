import { combineReducers } from 'redux';
import {
  SET_PLACEMENTS,
  SET_IMPRESSIONS,
  SET_LOADING,
  SET_COST_PER_MILE,
  SET_SUM_IMPRESSIONS,
  SET_TOTAL_COST,
  SET_IMPRESSION_COST,
} from './actions';

const initialState = {
  placements: [],
  impression: [],
  sumImpressions: [],
  impressionCost: [],
  costPerMile: [],
  totalCost: [],
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACEMENTS:
      return { ...state, placements: action.payload };
    case SET_IMPRESSIONS:
      return { ...state, impressions: action.payload };
    case SET_COST_PER_MILE:
      return { ...state, costPerMile: action.payload };
    case SET_SUM_IMPRESSIONS:
      return { ...state, sumImpressions: action.payload };
    case SET_TOTAL_COST:
      return { ...state, totalCost: action.payload };
    case SET_IMPRESSION_COST:
      return { ...state, impressionCost: action.payload };
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
