import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
// 26 - refactor imports to absolute paths
// import App from '../App';
// import CommentBox  from '../CommentBox';
// import CommentList from '../CommentList';
import App from 'components/App';
import CommentBox  from 'components/CommentBox';
import CommentList from 'components/CommentList';

// 28 - Helper function to clean up code (hah!)
// before each very literally means before every single test, we're going to do some common setup logic.

// 28 - Need to declare here for scope within this test file
//      use 'let' as we don't know what value will be assigned to it with
//      each test
let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

// 16
// 'it()' function is a global function, that means we do not have to require 
// or import into our test file.
// first arg is short string describing test
// second arg is function that contains logic to perform test
it('shows a comment box', () =>{
    // 17 - JSDOM fools React into believing
    // it is working inside a browser
    // const div = document.createElement('div');

    // ReactDOM.render(<App />, div);

    // 18 - Looks inside div and checks to see if the CommentBox component is present
    // Look at the code generated by JSDOM, will be displayed in terminal
    // like so:
    //      console.log src/components/__tests__/App.test.js
    //          <div><div>Comment Box</div><div>Comment List</div></div>
    //console.log(div.innerHTML);

    // 18 - Actual test: test 'Comment Box' string is 'displayed' in App component
    // 19 - expect(arg) - what we are inspecting, what we want to verify
    //      .toContain(arg) - 'matcher' statement, 
    //                         in this case will the inner HTML contain something
    //                         the arg to this is value we expect to see
    //                         Not all matchers require arguments.
    // You can have multiple expectations!!!
    // A universal function like 'it()'
    //expect(div.innerHTML).toContain('Comment Box');

    // 20 - improve testing
    //      Original test apt test file is trying to make an assertion
    //      about the behavior of our comment box component.
    //      App.test.js is trying to make an assertion about the behavior of the CommentBox component.
    //      App.test.js should only test App.js, not any behavior of imported components.
    
    // 23 - Actual code refactor using Enzyme!!!
    //const wrapped = shallow(<App />);   
    
    // 23 - look at the component 'wrapped' that we just created and we're going to find 
    // every copy of CommentBox inside of it.
    // Returns an array, will have an element for each instance of CommentBox found. 
    // We should see only 1!
    expect(wrapped.find(CommentBox).length).toEqual(1);

    // 17 - Removes component from memory
    // ReactDOM.unmountComponentAtNode(div);
})

// 24 - Add test to look for instance of CommentList
it('shows a comment list', () =>{
    //const wrapped = shallow(<App />);   
    expect(wrapped.find(CommentList).length).toEqual(1);
})