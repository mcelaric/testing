import React, { Component } from 'react';
import { connect } from 'react-redux';
// 45 - this is going to grab all the actions out of our actions index, not just file.
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: ''};

    
    // 30 - textarea event handler, allows textarea to actually be typed in and used!
    handleChange = event => {
        this.setState({ comment: event.target.value });
        // 37 - setState is asyncronous!!!  Nice to know
    }

    // 30 - form event handler 
    handleSubmit = event => {
        // prevents page from submitting and attempting reload
        event.preventDefault();

        // 45 - Call action creator, save user's comment
        // Addin this breaks tests!
        this.props.saveComment(this.state.comment);

        // Empty out text area
        this.setState({ comment: '' });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add A Comment</h4>
                {/* REMEMBER BASIC REACT:
                    Any time a user changes the textarea through a change event (i.e. actually typing in it), 
                    we will have our handleChange() method be called.
                    And handleChange() calls setState, which causes our component to automatically render, and when that occurs,
                    we put that new value from this.state.comment into the textarea. 
                */}
                <textarea 
                    onChange={this.handleChange}
                    value={this.state.comment} 
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

// 45 - Wire to Redux
//      Adding Redux breaks tests at this point!
export default connect(
    null,
    actions
)(CommentBox);