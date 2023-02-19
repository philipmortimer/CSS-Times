import { Comment, Header} from 'semantic-ui-react'
import React from 'react';
import './CommentSection.css'

// Imports comment profile picture images
import ade from './Avatars/ade.jpg'; import chris from './Avatars/chris.jpg'; 
import christian from './Avatars/christian.jpg'; import daniel from './Avatars/daniel.jpg';
import elliot from './Avatars/elliot.jpg'; import helen from './Avatars/helen.jpg';
import jenny from './Avatars/jenny.jpg'; import joe from './Avatars/joe.jpg';
import justen from './Avatars/justen.jpg'; import laura from './Avatars/laura.jpg';
import matt from './Avatars/matt.jpg'; import nan from './Avatars/nan.jpg';
import steve from './Avatars/steve.jpg'; import stevie from './Avatars/stevie.jpg';
import veronika from './Avatars/veronika.jpg';

// Takes article comments and makes them into comments section component

const avatarNames = [ade, chris, christian, daniel,
elliot, helen, jenny, joe, justen, laura, matt, nan, steve, stevie, veronika];
export const CommentSection = (props) => {
    /**
     * Converts the array of comments to a JSX component
     * @param {[ArticleComment]} commentList 
     * @returns The comments JSX
     */
    function processComments(commentList) {
        const comments = [];
        for (let j = 0; j < commentList.length; j++) {
            const i = j % commentList.length;
            // Shuffles comment icons everytime they are reused
            if (i === 0) {
                avatarNames.sort((a, b) => 0.5 - Math.random());
            }
            comments.push(
                <React.Fragment key={i}>
                    <Comment className="comment">
                        <Comment.Avatar className="commentImage"
                        src={avatarNames[i]} />
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