export const setUser = (data) => ({
  type: "setUser",
  payload: data,
});

export const setUserAsync = (data) => {
  console.log(data);
  setUser(data);
  // return (dispatch) => {
  //   dispatch();
  // };
};
