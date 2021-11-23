import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBg } from "../actions";
const ChangeBGForm = () => {
  const dispatch = useDispatch();
  const myColor = useSelector((state) => state.changeBGColor);
  const changeColor = document.getElementsByClassName("container")[0];
  return (
    <>
      {(changeColor.style.backgroundColor = myColor)}
      <button onClick={(e) => dispatch(changeBg())}>Change Color</button>
    </>
  );
};

export default ChangeBGForm;
