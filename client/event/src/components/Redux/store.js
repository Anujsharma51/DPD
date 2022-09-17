import { legacy_createStore as createStore } from "redux";
import { EventReducer } from "./reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
export const store = createStore(EventReducer, applyMiddleware(thunk));
