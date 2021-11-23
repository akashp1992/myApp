export const uniqueArray = (data) => {
  return {
    type: "UNIQUE_ARRAY_ITEM",
    payLoad:data
  };
};

export const changeBg = () => {
  return {
    type: "CHANGE_BG",
  };
};

export const changeDark=()=>{
  return{
  type:"DARK_THEME",
  }
}

export const changeLight=()=>{
  return{
  type:"LIGHT_THEME",
  }
}
