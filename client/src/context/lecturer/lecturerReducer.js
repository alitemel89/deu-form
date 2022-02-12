import {
    ADD_INFO, INFO_ERROR
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_INFO:
            return {
                ...state,
                loading: false,
                info: action.payload,
            };

        case INFO_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};