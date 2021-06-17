import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';


// 44 - This function will be called with the comment that we're trying to save
export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

// 55 - add fetch comments action creator
// No args passes as this is for hitting API to get list of comments
export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}