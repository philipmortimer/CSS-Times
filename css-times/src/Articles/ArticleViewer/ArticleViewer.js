import {Paragraph} from '../Paragraph';
import React from 'react';

// Component takes an article data object and displays it as a component.
// props.article should be an article object.
export const ArticleViewer = (props) => {
    return (
        <div className="articleWrapper">
            <img src={props.article.mainPhoto.filePath} 
                alt={props.article.mainPhoto.caption}
                className="mainPhoto"/>
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
                para.push(<h2 className="articleHeading">{paraList[i].heading}</h2>);
            }
            // Adds photo is present
            if (paraList[i].photo !== Paragraph.NO_PHOTO) {
                para.push(        
                    <img src={paraList[i].photo.filePath} 
                    alt={paraList[i].photo.caption}
                    className="articlePhoto"/>);
            }
            // Adds text
            para.push(paraList[i].text);
            // Adds to article array
            articleContent.push(
                <React.Fragment key={i} className="paragraph">
                    {para}
                </React.Fragment>
            );

        }
        return articleContent;
    }
}