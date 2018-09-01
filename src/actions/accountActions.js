export const GET_REPOSITORIES_REQUEST = 'GET_REPOSITORIES_REQUEST';
export const GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS';
export const GET_REPOSITORIES_FAIL = 'GET_REPOSITORIES_FAIL';

export function getRepositories(name, callback) {
  return (dispatch) => {
    dispatch({
      type: GET_REPOSITORIES_REQUEST,
      payload: name,
    });

    fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => response.json())
      .then((repositories) => {
        if (repositories.message) {
          dispatch({
            type: GET_REPOSITORIES_FAIL,
            payload: repositories.message,
          });
        } else if (!repositories.length) {
          dispatch({
            type: GET_REPOSITORIES_FAIL,
            payload: `User doesn't have repositories`,
          });
        } else {
          dispatch({
            type: GET_REPOSITORIES_SUCCESS,
            payload: repositories,
          });
          callback(repositories);
        }
      });
  };
}
