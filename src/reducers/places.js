import * as actionTypes from '../actions/action_types'

const initialState = {
    list: ""
};

const Places = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PLACES_LIST:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state
    }
};

export default Places;