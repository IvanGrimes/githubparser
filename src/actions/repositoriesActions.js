export const SET_YEAR = 'SET_YEAR';
export const FILTER_BY_YEAR = 'FILTER_BY_YEAR';

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year,
  };
}

export const filterByYear = apply => ({
  type: FILTER_BY_YEAR,
  payload: apply,
});
