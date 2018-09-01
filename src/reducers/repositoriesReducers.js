import { SET_YEAR, FILTER_REPOSITORIES_BY_YEAR } from '../actions/repositoriesActions';
import filterRepositories from '../utils/filterRepositories';

const initialState = {
  year: 2018,
  repositories: [],
};

export default function ReposList(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case FILTER_REPOSITORIES_BY_YEAR:
      return {
        ...state,
        repositories: filterRepositories(action.payload, state.year),
      }
    default:
      return state;
  }
}
