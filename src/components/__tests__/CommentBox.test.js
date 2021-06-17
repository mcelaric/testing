import React  from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
// 47 - Add Redux functionality
import Root from 'Root';
// 31, 33 - Full DOM example for CommentBox
//          Instructor would go with Shallow IRL

// 34
let wrapped;
beforeEach(() => {
    // 47 - Wrap CommentBox in Root component to give access to Redux
    // use of props.children in Root allows Root to wrap *any* component
    // Now tests pass!
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>
    );
});

// 34 - clean up components after every single task is executed
afterEach(() => {
    wrapped.unmount();
});


// 34 - Enzyme is going to take our component instance.
// It's going to attempt to render it into that fake DOM that is created by JSDOM 
// and then it returns this object right here that we usually refer to as 'wrapped.
it('has a textarea and has 2 buttons', () => {
    // commented out in 34 when beforeEach added
    // const wrapped = mount(<CommentBox />);  

    // Look through the component that was created, and attempt to find a textarea and button elements
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

// 41 - common code between following tests
describe('the text area', () => {

    // 41 - This beforeEach only affects the tests within the 'describe' block
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });

        wrapped.update();        
    });
    
    // 36 - test textarea itself
    // Need to simulate user typing in textarea - 'change'
    // We are simulating just the name of the event by itself, which is simply 'change', not 'onChange'.
    it('has a textarea that a user can type in', () =>{
        //wrapped.find('textarea').simulate('change', {
            // 36 - This simulates this.setState({ comment: event.target.value });
        //    target: { value: 'new comment' }
        //});

        // 37 - Force component to update
        //wrapped.update();

        // 38 - assertion to look at textarea and make sure that it has received the correct value.
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    })

    // 39 - test form submit
    it('when form is submitted, textarea gets emptied', () =>{
        // Simulate user entry
        //wrapped.find('textarea').simulate('change', {
        //    target: { value: 'new comment' }
        //});

        // Force update to simulate setState
        //wrapped.update();

        // Simulate form submission
        wrapped.find('form').simulate('submit');

        // Need to force update again
        wrapped.update();
        
        // Verify textarea is now blank
        expect(wrapped.find('textarea').prop('value')).toEqual('');

    })

});