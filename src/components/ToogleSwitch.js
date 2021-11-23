import React from "react";

import './css/Switch.css'
const ToogleSwitch = ({ label,handleChange,handleChecked }) => {
  return (
    <div className="switch-container">
      {label}
      {""}
      <div className="toogle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} onChange={handleChange} checked={handleChecked} />
        <label htmlFor={label} className="label">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToogleSwitch;
