import { SAVE_COMMENT } from 'actions/types';


// 44 - This function will be called with the comment that we're trying to save
export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}