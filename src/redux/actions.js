export const SET_PLACEMENTS = 'SET_PLACEMENTS ';
export const SET_IMPRESSIONS = 'SET_IMPRESSIONS ';
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

export const setLoading = (loading) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
