import filterRepositoriesByYear from '../utils/filterRepositoriesByYear';
import getUniqueYearsFromRepositories from '../utils/getUniqueYearsFromRepositories';
import {
  FILTER_BY_YEAR,
  GET_REPOSITORIES_FAIL,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_REQUEST,
  GET_YEARS,
} from '../actions/repositories';

const initialState = {
  year: 0,
  repositories: [],
  user: '',
  filteredRepositories: [],
  isFetching: false,
  error: '',
  years: [],
};

export default function repositories(state = initialState, action) {
  switch (action.type) {
    case GET_REPOSITORIES_REQUEST:
      return {
        ...state,
        error: '',
        user: action.payload,
        isFetching: true,
        filteredRepositories: [],
      };
    case GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        isFetching: false,
      };
    case GET_REPOSITORIES_FAIL:
      return {
        ...state,
        repositories: [],
        error: action.payload,
        isFetching: false,
      };
    case GET_YEARS:
      return {
        ...state,
        years: getUniqueYearsFromRepositories(action.payload),
      };
    case FILTER_BY_YEAR:
      return {
        ...state,
        year: action.payload,
        filteredRepositories: filterRepositoriesByYear(state.repositories, action.payload),
      };
    default:
      return state;
  }
}
