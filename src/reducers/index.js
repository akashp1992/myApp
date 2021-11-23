import { combineReducers as reducer } from "redux";
import UniqueArray from './arrayOprations';
import changeBGColor from "./ChangeBG";

const rootReducer=reducer({
    UniqueArray,
    changeBGColor
})

export default rootReducer;
