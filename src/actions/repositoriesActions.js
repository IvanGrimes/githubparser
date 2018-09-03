export const FILTER_BY_YEAR = 'FILTER_BY_YEAR';
export const GET_REPOSITORIES_REQUEST = 'GET_REPOSITORIES_REQUEST';
export const GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS';
export const GET_REPOSITORIES_FAIL = 'GET_REPOSITORIES_FAIL';
export const GET_YEARS = 'GET_YEARS';

export const getRepositories = (name, callback) => (
  (dispatch) => {
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
            payload: 'User doesn\'t have repositories',
          });
        } else {
          dispatch({
            type: GET_REPOSITORIES_SUCCESS,
            payload: repositories,
          });
          callback(repositories);
        }
      });
  }
);

export const filterByYear = year => ({
  type: FILTER_BY_YEAR,
  payload: year,
});

export const getYears = repositories => ({
  type: GET_YEARS,
  payload: repositories,
});
