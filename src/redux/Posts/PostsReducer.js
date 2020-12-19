const INITIAL_STATE = {
  posts: [],
};

const postsReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setPosts":
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducers;
