import { legacy_createStore } from "redux";
import todoReducer from "../reducers/reducer";
import { rootReducer } from "./multireducers";
import { composeWithDevTools } from 'redux-devtools-extension';



export const reduxStore=legacy_createStore(
    rootReducer,
    composeWithDevTools()
)