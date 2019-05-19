import { createStore, combineReducers } from 'redux'
import Types from "./types";

const rootReducer = combineReducers({
    types: Types,
});

/*const store = createStore(
    rootReducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);*/

export default rootReducer;