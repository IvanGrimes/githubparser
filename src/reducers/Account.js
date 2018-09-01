import { GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS, GET_REPOSITORIES_FAIL } from '../actions/Account';

const initialState = {
  name: '',
  repositories: [],
  isFetching: false,
  error: '',
};

export default function Account(state = initialState, action) {
  switch (action.type) {
    case GET_REPOSITORIES_REQUEST:
      return {
        ...state,
        name: action.payload,
        error: '',
        isFetching: true,
      };
    case GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        error: '',
        isFetching: false,
      };
    case GET_REPOSITORIES_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
