// 48 - Add Redux test cases
import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    // Simulate action
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    // Should return array with single element, 
    // the comment from our simulated action above
    const newState = commentsReducer([], action);
    
    expect(newState).toEqual(['New Comment']);
});

// 49 - Handle unknown type of action
it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type: 'LKAFDSJLKAFD' });
    expect(newState).toEqual([]);
});