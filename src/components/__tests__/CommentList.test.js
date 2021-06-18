// 52 
import React  from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';

import Root from 'Root';

let wrapped;
beforeEach(() => {
    // 53 - 'state' prop for testing
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
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
it('shows the text for each comment', () => {
    //console.log(wrapped.render().text());

    // NOTE:  We cannot test for multiple toContains() inside of a single expectation!!!
    // Two separate toContains() or two separate expectations.
    // One's going to specifically look for 'Comment 1', the second specifically looking for 'Comment 1'
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
});
