import * as actionTypes from '../actions/action_types'

const initialState = {
    place: {}
};

const FullPage = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PLACE_BY_ID:
            return {
                ...state,
                place: action.payload
            };
        default:
            return state
    }
};

export default FullPage;