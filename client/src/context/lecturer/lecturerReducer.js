import {
    ADD_INFO
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_INFO:
            return {
                loading: false,
                info: action.payload,
            };



        default:
            return state;
    }
};