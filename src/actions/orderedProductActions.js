const ORDERED_PRODUCTS_API = 'http://localhost:3000/api/v1/ordered_products'

export function fetchOrderedProducts() {
  return dispatch => {
    dispatch(fetchOrderedProductsBegin());
    return fetch(ORDERED_PRODUCTS_API)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchOrderedProductsSuccess(json));
      return json;
    })
    .catch(error => dispatch(fetchOrderedProductsFailure(error)));
  };
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}


export const fetchOrderedProductsBegin = () => ({
  type: "FETCH_ORDERED_PRODUCTS_BEGIN"
});

export const fetchOrderedProductsSuccess = ordered_products => ({
  type: "FETCH_ORDERED_PRODUCTS_SUCCESS",
  payload: { ordered_products }
});

export const fetchOrderedProductsFailure = error => ({
  type: "FETCH_ORDERED_PRODUCTS_FAILURE",
  payload: { error }
});
