import { createStore, combineReducers } from 'redux'
import Types from "./types";
import Places from "./places";

const rootReducer = combineReducers({
    types: Types,
    places: Places
});

/*const store = createStore(
    rootReducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);*/

export default rootReducer;