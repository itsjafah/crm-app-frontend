const NOTES_API = 'http://localhost:3000/api/v1/notes'

export function fetchNotes() {
  console.log('working?');
  return dispatch => {
    dispatch(fetchNotesBegin());
    return fetch(NOTES_API)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchNotesSuccess(json.notes));
      return json.notes;
    })
    .catch(error => dispatch(fetchNotesFailure(error)));
  };
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}

  export const fetchNotesBegin = () => ({
    type: "FETCH_NOTES_BEGIN"
  });

  export const fetchNotesSuccess = notes => ({
    type: "FETCH_NOTES_SUCCESS",
    payload: { notes }
  });

  export const fetchNotesFailure = error => ({
    type: "FETCH_NOTES_FAILURE",
    payload: { error }
  });
