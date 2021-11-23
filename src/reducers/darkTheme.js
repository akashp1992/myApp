const initialState = "";
const darkTheme = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_THEME":
      return (state = "dark");
    case "LIGHT_THEME":
      return (state = "light");
    default:
      return state;
  }
};
export default darkTheme;
