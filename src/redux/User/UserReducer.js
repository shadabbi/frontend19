const INITIAL_STATE = {
  user: {
    displayName: null,
    email: null,
  },
};

const UserReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
