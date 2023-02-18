import {Paragraph} from '../Paragraph';
import React from 'react';
import Moment from 'react-moment';
import { ArticleComment } from '../ArticleComment';

// Component takes an article data object and displays it as a component.
// props.article should be an article object.
export const ArticleViewer = (props) => {
    return (
        <div className="articleWrapper">
            <h1 className="headline">{props.article.headline}</h1>
            <img src={props.article.mainPhoto.filePath} 
                alt={props.article.mainPhoto.caption}
                className="mainPhoto"/>
            <h4 className="author">By {props.article.author}</h4>
            <Moment className="publishDate" locale='uk' format='LL'
            filter={(str) => str.replace(',', ' ')}>
                {props.article.publishDate}
            </Moment>
            {processArticleText(props.article.paragraphs)}
        </div>
    );

    /**
     * Processes the paragraphs and puts them into a html element
     * @param {[Paragraph]} paraList The paragraphs
     * @returns The JSX element for the core text.
     */
    function processArticleText(paraList) {
        const articleContent = [];
        for (let i = 0; i < paraList.length; i++) {
            const para = [];
            // Adds header if present
            if (paraList[i].heading !== Paragraph.NO_HEADING) {
                para.push(
                    <React.Fragment key={0}>
                        <h2 className="subheading">{paraList[i].heading}</h2>
                    </React.Fragment>
                );
            }
            // Adds photo is present
            if (paraList[i].photo !== Paragraph.NO_PHOTO) {
                para.push(        
                    <React.Fragment key={1}>
                        <img src={paraList[i].photo.filePath} 
                        alt={paraList[i].photo.caption}
                        className="articlePhoto"/>
                    </React.Fragment>
                    );
            }
            // Adds text
            para.push(
                <React.Fragment key={2}>
                    <div className="paraText">{paraList[i].text}</div>
                </React.Fragment>
            );
            // Adds to article array
            articleContent.push(
                <React.Fragment key={i}>
                    {para}
                </React.Fragment>
            );

        }
        return articleContent;
    }

    /**
     * Converts the array of comments to a JSX component
     * @param {[ArticleComment]} commentList 
     * @returns The comments JSX
     */
    function processComments(commentList) {
        const comments = [];
        return comments;
    }
}