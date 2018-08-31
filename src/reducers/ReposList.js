import { SET_YEAR, GET_REPOSITORIES_BY_YEAR } from '../actions/ReposList';

const initialState = {
  year: 2018,
  repositories: [],
};

function filterRepositories(repositories, year) {
  const filtered = repositories.filter((repository) => {
    const repositoryYear = new Date(repository.created_at).getFullYear();

    if (repositoryYear === year) {
      return repository;
    }
  });

  return filtered;
}

export default function ReposList(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case GET_REPOSITORIES_BY_YEAR:
      return {
        ...state,
        repositories: filterRepositories(action.payload, state.year),
      }
    default:
      return state;
  }
}
