import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

// This enables the redux dev tools extension, or does nothing if not installed
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleWare))
);

export default store;
