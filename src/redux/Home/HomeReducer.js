const INITIAL_STATE = {
  date: "",
  explanation: "",
  title: "",
  hdurl: "",
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setHome":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
