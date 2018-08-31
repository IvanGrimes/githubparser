export const GET_REPOSITORIES_REQUEST = 'GET_REPOSITORIES_REQUEST';
export const GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS';

export function getReposByName(name, callback) {
  return (dispatch) => {
    dispatch({
      type: GET_REPOSITORIES_REQUEST,
      payload: name,
    });
    console.log(callback);

    fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => response.json())
      .then((repositories) => {
        dispatch({
          type: GET_REPOSITORIES_SUCCESS,
          payload: repositories,
        });
        callback(repositories);
      });
  };
}
