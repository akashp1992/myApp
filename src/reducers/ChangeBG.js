const initialState = "";
const changeBGColor = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_BG":
      const randColor = Math.floor(Math.random() * 16777215).toString(16);
      return state = "#"+randColor;
    default:
      return state;
  }
};

export default changeBGColor;
