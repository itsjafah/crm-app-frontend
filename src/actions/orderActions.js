const ORDERS_API = 'http://localhost:3000/api/v1/orders'

export function fetchOrders() {
  return dispatch => {
    dispatch(fetchOrdersBegin());
    return fetch(ORDERS_API)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchOrdersSuccess(json));
      return json;
    })
    .catch(error => dispatch(fetchOrdersFailure(error)));
  };
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}

  export const fetchOrdersBegin = () => ({
    type: "FETCH_ORDERS_BEGIN"
  });

  export const fetchOrdersSuccess = orders => ({
    type: "FETCH_ORDERS_SUCCESS",
    payload: { orders }
  });

  export const fetchOrdersFailure = error => ({
    type: "FETCH_ORDERS_FAILURE",
    payload: { error }
  });
