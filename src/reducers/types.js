import * as actionTypes from '../actions/action_types'

const initialState = {
    list: []
};

const Types = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_TYPES_LIST:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state
    }
};

export default Types;