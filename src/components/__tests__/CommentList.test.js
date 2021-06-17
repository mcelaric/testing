// 52 
import React  from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';

import Root from 'Root';

let wrapped;
beforeEach(() => {
    // 53 - 'state' prop for testing
    const initialState = {
        comments: ['comment 1', 'comment 2']
    };
    
    wrapped = mount(
    <Root initialState={initialState}>
        <CommentList />
    </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});


// Issue - we need to figure out some way to get our Redux store
// to say, hey, I've got a comment inside of you. 
// Take the comment from me and render it out onto the screen.

// 53 - Solution: Create our own 'state' in beforeEach(),
// then pass it as a prop to Root
it('creates one LI per comment', () => {
    //console.log(wrapped.find('li').length);
    expect(wrapped.find('li').length).toEqual(2);
});

// 54 - inspect wrapped and get the text elements
// Enzyme doc says 'use text() with skepticism, instead use render()' 
// render() returns a CheerioWrapper
// Cheerio is a library very similar to jQuery.
// It allows us to kind of crawl or run queries or essentially selectors over snippets of HTML.
// it('shows the text for each comment', () => {
    
// });
