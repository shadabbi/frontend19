const INITIAL_STATE = {
  Albums: [],
};

const postsReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setAlbums":
      return {
        ...state,
        Albums: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducers;
