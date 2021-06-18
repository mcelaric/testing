// 50 - Test action creators themselves 
import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";


// Group each set of tests for each action creator together
// with a describe() statement.
describe('saveComment', () => {
    it('has the correct type', ()=> {
        // Call action creator directly
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        // Pass comment to be saved in payload
        const action = saveComment('New Comment');

        // Make sure 'New Comment' is returned as payload
        expect(action.payload).toEqual('New Comment');
    });
});
