const initialState = "";
const UniqueArray = (state = initialState, action) => {
  switch (action.type) {
    case "UNIQUE_ARRAY_ITEM":
      const data = action.payLoad;
      const myArr = [...data];
      return (state = myArr.filter((v, i, a) => a.indexOf(v) === i))
    default:
      return state;
  }
};
export default UniqueArray;
