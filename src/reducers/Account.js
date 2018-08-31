import { GET_REPOSITORIES_REQUEST, GET_REPOSITORIES_SUCCESS } from '../actions/Account';

const initialState = {
  name: '',
  repositories: [],
  isFetching: false,
};

export default function Account(state = initialState, action) {
  switch (action.type) {
    case GET_REPOSITORIES_REQUEST:
      return {
        ...state,
        name: action.payload,
        isFetching: true,
      };
    case GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
