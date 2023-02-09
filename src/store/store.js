import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";

import thunk from 'redux-thunk'
import { urlReducer } from "./urlReducer/url.reducer";
import { historyReducer } from "./historyReducer/history.reducer";

const rootReducer = combineReducers({
    urlReducer: urlReducer,
    historyReducer: historyReducer,
})
const composeEnhancer = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;