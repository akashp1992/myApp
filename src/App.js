import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/menu";
import DuplicateArray from "./pages/DuplicateArray";
import ChangeBGForm from "./pages/ChangeBGForm";
import ToogleSwitch from "./components/ToogleSwitch";
import { useDispatch,useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import {lightTheme,darkTheme} from './components/Themes'
import {changeDark,changeLight} from './actions'
function App() {
  const myTheme=useSelector((state)=>state.darkTheme);
  const dispatch=useDispatch();
  const [show, setShow] = useState(true);
  const [isChecked,setIsChecked]=useState(false);
  const handleOnChange=()=>{
    setIsChecked(!isChecked);
  }
  const compArray = [
    { name: "DuplicateArray", compName: <DuplicateArray /> },
    { name: "ChangeBGColor", compName: <ChangeBGForm /> },
  ];
  return (
    <ThemeProvider theme={myTheme==='light'?darkTheme:lightTheme}>
    <>
     
      <div className="container">
        <h1>React Example</h1>
        <ToogleSwitch label="Theme" handleChecked={dispatch(changeLight())} handleChange={handleOnChange} />
        <div className="sub-container">
          {show ? (
            <ul>
              {Menu.map((name, key) => (
                <li key={key} className="menu-button">
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={(e) => setShow(false)}
                    to={name}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
           displayComponent(compArray)
           )}
        </div>
      </div>
    </>
    </ThemeProvider>
  );
}

const displayComponent = (compArray) => {
  console.log(compArray);
  return (
    <Routes>
      <Route exact path="/" element={""} ></Route> 
      {Menu.map((com, k) => (
        <Route
          key={k}
          path={`/${com}`}
          element={compArray.map(({ name, compName }) =>
            name === com ? compName : null
          )}
        > </Route>
      ))}
    </Routes>
  );
};
export default App;
