import { Comment, Header} from 'semantic-ui-react'
import React from 'react';
import './CommentSection.css'
// Takes article comments and makes them into comments section component

const avatarNames = ['ade', 'chris', 'christian', 'daniel',
    'elliot', 'helen', 'jenny', 'joe', 'justen', 'laura', 'matt', 'nan', 'steve', 'stevie', 'veronika'];
export const CommentSection = (props) => {

    /**
     * Converts the array of comments to a JSX component
     * @param {[ArticleComment]} commentList 
     * @returns The comments JSX
     */
    function processComments(commentList) {
        const comments = [];
        for (let i = 0; i < commentList.length; i++) {
            // Shuffles comment icons everytime they are reused
            if (i % avatarNames.length === 0) {
                avatarNames.sort((a, b) => 0.5 - Math.random());
            }
            comments.push(
                <React.Fragment key={i}>
                    <Comment className="comment">
                        <Comment.Avatar className="commentImage"
                        src={'https://react.semantic-ui.com/images/avatar/small/' + 
                            avatarNames[i] + '.jpg'} />
                        <Comment.Content>
                            <Comment.Author className="commentAuthor">{commentList[i].userName}</Comment.Author>
                            <Comment.Text className="commentText">
                                {commentList[i].comment}
                            </Comment.Text>
                        </Comment.Content>
                    </Comment>
                </React.Fragment>
            );
        }

        return (
        <React.Fragment key={0}>
            <Comment.Group className="comments">
                <Header as='h3' dividing>
                    Comments
                </Header>
                {comments}
            </Comment.Group>
        </React.Fragment>
        );
    }

    return (
        processComments(props.comments)
    );
}