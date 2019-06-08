import * as actionTypes from '../actions/action_types'

const initialState = {
    list: []
};

const Map = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PLACES_LIST_BY_TYPE:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state
    }
};

export default Map;