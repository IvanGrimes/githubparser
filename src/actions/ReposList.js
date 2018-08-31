export const SET_YEAR = 'SET_YEAR';
export const GET_REPOSITORIES_BY_YEAR = 'GET_REPOSITORIES_BY_YEAR';

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year,
  };
}

export const getRepositoriesByYear = repositories => ({
  type: GET_REPOSITORIES_BY_YEAR,
  payload: repositories,
});
