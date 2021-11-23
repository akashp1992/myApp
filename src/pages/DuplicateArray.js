import React, { useState } from "react";
import BackIcon from "../image/arrow.png";
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { uniqueArray } from "../actions";
const DuplicateArray = () => {
  const [val, setVal] = useState('');
  const navigate = useNavigate();
  
  const myValue=useSelector((state)=>state.UniqueArray);
  const dispatch=useDispatch();
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <>
      <img src={BackIcon} alt="arrow" onClick={(e) => navigate("/", { replace: true })} />
      <div className="form-container">
        <input
          type="text"
          className="text-box"
          placeholder="Enter Numbers"
          name="myArray"
          id="myArray"
          onChange={handleChange}
          value={val}
         
        />
        <div className="display-msg">{myValue===""?"Watching...":"Unique Array is :- "+myValue}</div>
        <br/>
        <button onClick={(e)=>dispatch(uniqueArray(val))}>Submit</button>
      </div>
    </>
  );
};

export default DuplicateArray;
