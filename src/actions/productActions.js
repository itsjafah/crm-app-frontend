const PRODUCTS_API = 'http://localhost:3000/api/v1/products'

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(PRODUCTS_API)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchProductsSuccess(json.products));
      return json.products;
    })
    .catch(error => dispatch(fetchProductsFailure(error)));
  };
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}


  export const fetchProductsBegin = () => ({
    type: "FETCH_PRODUCTS_BEGIN"
  });

  export const fetchProductsSuccess = products => ({
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: { products }
  });

  export const fetchProductsFailure = error => ({
    type: "FETCH_PRODUCTS_FAILURE",
    payload: { error }
  });
