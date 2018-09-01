import { SET_YEAR, FILTER_BY_YEAR } from '../actions/repositoriesActions';

const initialState = {
  year: 2018,
  filterByYear: false,
};

export default function repositoriesReducers(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case FILTER_BY_YEAR:
      return {
        ...state,
        filterByYear: action.payload,
      };
    default:
      return state;
  }
}
