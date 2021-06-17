// 47 - helper file
// CommentBox.test.js file is currently breaking because
// our CommentBox is being rendered inside that test file without a Redux store or Provider tag
// This helper file will add all this functionality, and is imported into any test.js file
// we create to give tested component access to Redux

import React from 'react';
import { Provider } from 'react-redux';
// 55 - add applyMiddlware and redux promise
import { createStore , applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// 'Export' the Redux functionality
// Any time we create an instance of this component, we're going to create our Provider tag and
// create our Redux store at the same time, with empty state
// props.children allows us to take this component we just created
// and use it to wrap other components.

// 53 - Add prop of initialState for testing CommentList
// Set to empty state for so tests for App and CommentBox don't blow up
export default ({ children, initialState = {} }) => {    
    // 55 - clean up store creation to add applyMiddleware arg
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}