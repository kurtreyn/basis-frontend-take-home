export const SET_PLACEMENTS = 'SET_PLACEMENTS ';
export const SET_IMPRESSIONS = 'SET_IMPRESSIONS ';
export const SET_COST_PER_MILE = ' SET_COST_PER_MILE ';
export const SET_SUM_IMPRESSIONS = 'SET_SUM_IMPRESSIONS ';
export const SET_TOTAL_COST = 'SET_TOTAL_COST ';
export const SET_IMPRESSION_COST = 'SET_IMPRESSION_COST ';
export const SET_LOADING = 'SET_LOADING';

export const setPlacements = (placement) => (dispatch) => {
  dispatch({
    type: SET_PLACEMENTS,
    payload: placement,
  });
};

export const setImpressions = (impression) => (dispatch) => {
  dispatch({
    type: SET_IMPRESSIONS,
    payload: impression,
  });
};

export const setCostPerMile = (costPerMile) => (dispatch) => {
  dispatch({
    type: SET_COST_PER_MILE,
    payload: costPerMile,
  });
};

export const setSumImpressions = (sumImpression) => (dispatch) => {
  dispatch({
    type: SET_SUM_IMPRESSIONS,
    payload: sumImpression,
  });
};

export const setImpressionCost = (impressionCost) => (dispatch) => {
  dispatch({
    type: SET_IMPRESSION_COST,
    payload: impressionCost,
  });
};

export const setTotalCost = (totalCost) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_COST,
    payload: totalCost,
  });
};

export const setLoading = (loading) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
