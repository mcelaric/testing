// 59 - Integration test file
import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

// 63 - Set up moxios, tell it to attempt to intercept any request that Axios tries to issue.
// Essentially, we are saying inside the beforeEach() before the test runs and right before we
// try to simulate the Fetch Comments button click, turn off any requests that are being issued by Axios, just stop them.
beforeEach(() => {
    moxios.install();

    // Look for any requests going to URL, and intercept
    // Second arg customizes how moxios will respond to request
    // This object will be returned to Axios, fooling it into thinking this is the response
    // Return a 200, and 'data'
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1'}, { name: 'Fetched #2'}]
    });
});

// 63 - Uninstall the moxios mock
afterEach(() => {
    moxios.uninstall();
});


// 65 - Jest will run each line of code and not wait, top down processing.  We can prevent this
// by passing 'done' to the function. Jest is task oriented and not results oriented!
// By getting a reference to 'done', the arg, we can then call the 'done' function from somewhere inside of
// our test file.  As soon as we start to reference this function, Jest says, oh, I see you're trying
// to make use of 'done' well, in that case, are going to run all the code inside of your test file or this test right here.
// But I'm not going to assume that it's complete until you, the developer, invoke this function.
// So only when we invoke this function 'done' does Jest say, OK, I guess they're all done.
// They did everything they need to do.
it('can fetch a list of comments and display them', (done) => {
    // Attempt to render the *entire* app
    // The entire purpose of this test is to confirm that our application can reach out to the API and
    // fetch a list of comments by itself.
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // 61 - Find Fetch Comments button and simulate clicking it
    wrapped.find('.fetch-comments').simulate('click');

    // 66 - moxios await, as this more accurately simulates request/response
    moxios.wait(() => {
        // Update the component
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        // Signal Jest we are through testing
        done();
        wrapped.unmount();
    });    

    /*
    // 65 - Introduce a pause to simulate wait for API response
    // Move expectation into this function
    setTimeout(() => {
        // Update the component
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        // Signal Jest we are through testing
        done();
        wrapped.unmount();
    }, 100);
    */

    // 61 - Expect to find a list of comments returned from API
    // Technically, look for 500 li's 
    //expect(wrapped.find('li').length).toEqual(2);

});