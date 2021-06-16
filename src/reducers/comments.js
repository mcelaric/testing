import { SAVE_COMMENT } from "actions/types";

//42 - setup
export default function(state = [], action) {
    switch (action.type) {
        // 44 
        case SAVE_COMMENT:
            // 44 - add new comment to store/state
            return [...state, action.payload];
        default:
            return state;
    }
}

