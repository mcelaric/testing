import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

//42 - setup
export default function(state = [], action) {
    switch (action.type) {
        // 44 
        case SAVE_COMMENT:
            // 44 - add new comment to store/state
            return [...state, action.payload];
        
        // 57 - Add fetch comments
        // Return the comments list from the API call 
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];

         default:
            return state;
    }
}

