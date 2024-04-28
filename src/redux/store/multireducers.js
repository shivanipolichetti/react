import { combineReducers } from "redux";
import todoReducer from "../reducers/reducer";
import profileReducer from "../reducers/profilereducer";
import productReducer from "../reducers/productsReducer";

export const rootReducer=combineReducers(
    {
    profile:profileReducer,
    todos:todoReducer,
    products:productReducer
}
)