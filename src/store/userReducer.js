const INITIAL_STATE = {
  token: '',
  id: '',
  name: '',
  auth: 0,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        token: action.token,
        id: action.id,
        name: action.name,
        auth: 1
      };
    case 'LOG_OUT':
      return {
        ...state,
        token: null,
        id: null,
        name: null,
        profileUrl: null,
        auth: 0
      };
    default:
      return state;
  }
}

export default userReducer;