import React  from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// 13
export default () => {
    // 14
    // Display bare-bones components
    return (
        <div>
            <CommentBox />
            <CommentList />
        </div>
    );
}
