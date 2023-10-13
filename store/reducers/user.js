import { LOGOUT, LOGIN } from "../actions/user";

const initialState = {
  user: false,
};

function userReducer(state = initialState, action) {
  const { type, user, token } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: { ...user },
        token,
      };

    case LOGOUT:
      return {
        ...state,
        user: false,
        token: false,
      };

    default:
      return state;
  }
}

export default userReducer;
