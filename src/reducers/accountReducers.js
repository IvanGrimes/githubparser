import { GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS, GET_REPOSITORIES_FAIL } from '../actions/accountActions';

const initialState = {
  name: '',
  repositories: [],
  isFetching: false,
  error: '',
};

export default function accountReducers(state = initialState, action) {
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
        isFetching: false,
      };
    case GET_REPOSITORIES_FAIL:
      return {
        ...state,
        repositories: [],
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
