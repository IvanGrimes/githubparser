export const SET_YEAR = 'SET_YEAR';
export const FILTER_REPOSITORIES_BY_YEAR = 'FILTER_REPOSITORIES_BY_YEAR';

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year,
  };
}

export const filterRepositoriesByYear = repositories => ({
  type: FILTER_REPOSITORIES_BY_YEAR,
  payload: repositories,
});
