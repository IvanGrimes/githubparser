export const GET_REPOSITORIES_REQUEST = 'GET_REPOSITORIES_REQUEST';
export const GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS';

export function getReposByName(name) {
  return (dispatch) => {
    dispatch({
      type: GET_REPOSITORIES_REQUEST,
      payload: {
        name,
        isFetching: true,
      },
    });

    fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => response.json())
      .then((repositories) => {
        dispatch({
          type: GET_REPOSITORIES_SUCCESS,
          payload: {
            repositories,
            isFetching: false,
          },
        });
      });
  };
}
