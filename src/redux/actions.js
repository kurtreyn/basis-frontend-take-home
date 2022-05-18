export const SET_PLACEMENTS = 'SET_PLACEMENTS ';
export const SET_DELIVERY = 'SET_DELIVERY ';
export const SET_LOADING = 'SET_LOADING';

export const setPlacements = (placement) => (dispatch) => {
  dispatch({
    type: SET_PLACEMENTS,
    payload: placement,
  });
};

export const setDelivery = (delivery) => (dispatch) => {
  dispatch({
    type: SET_DELIVERY,
    payload: delivery,
  });
};

export const setLoading = (loading) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
