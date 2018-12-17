const CUSTOMERS_API = 'http://localhost:3000/api/v1/customers'

export function fetchCustomers() {
  return dispatch => {
    dispatch(fetchCustomersBegin());
    return fetch(CUSTOMERS_API)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchCustomersSuccess(json.customers));
      return json.customers;
    })
    .catch(error => dispatch(fetchCustomersFailure(error)));
  };
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}


  export const fetchCustomersBegin = () => ({
    type: "FETCH_CUSTOMERS_BEGIN"
  });

  export const fetchCustomersSuccess = customers => ({
    type: "FETCH_CUSTOMERS_SUCCESS",
    payload: { customers }
  });

  export const fetchCustomersFailure = error => ({
    type: "FETCH_CUSTOMERS_FAILURE",
    payload: { error }
  });
