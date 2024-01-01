import { combineReducers } from "redux";

import dropdownReducer from "./dropdown/reducer";


const rootReducer = combineReducers({ dropdown: dropdownReducer,  });

export default rootReducer;