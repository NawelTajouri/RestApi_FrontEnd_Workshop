import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
export const store = createStore(reducer, compose(applyMiddleware(thunk), devTools))