const USERS_API = 'http://localhost:3000/api/v1/users'

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return fetch(USERS_API)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchUsersSuccess(json.users));
      return json.users;
    })
    .catch(error => dispatch(fetchUsersFailure(error)));
  };
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}

  export const fetchUsersBegin = () => ({
    type: "FETCH_USERS_BEGIN"
  });

  export const fetchUsersSuccess = users => ({
    type: "FETCH_USERS_SUCCESS",
    payload: { users }
  });

  export const fetchUsersFailure = error => ({
    type: "FETCH_USERS_FAILURE",
    payload: { error }
  });
