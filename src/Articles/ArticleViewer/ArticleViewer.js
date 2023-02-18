import {Paragraph} from '../Paragraph';
import React, {useState} from 'react';
import Moment from 'react-moment';
import { CommentSection } from './CommentSection/CommentSection';
import './ArticleViewer.css'
import { Disclaimer } from '../../Pages/Home/Disclaimer/Disclaimer';
// Component takes an article data object and displays it as a component.
// props.article should be an article object.
export const ArticleViewer = (props) => {
    const [_, setMainImageLoaded] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    return (
        <div className="articleWrapper">
            <div className="disclaimer"><Disclaimer /></div>
            <h1 className="headline">{props.article.headline}</h1>
            <img onLoad={() => {setMainImageLoaded(true)}} src={props.article.mainPhoto.filePath} 
                alt={props.article.mainPhoto.caption}
                className="mainPhoto"/>
            <h4 className="author">By {props.article.author}</h4>
            <Moment className="publishDate" locale='uk' format='LL'
            filter={(str) => str.replace(',', ' ')}>
                {props.article.publishDate}
            </Moment>
            {processArticleText(props.article.paragraphs)}
            <CommentSection comments={props.article.comments}/>
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
                        <img onLoad={() => setImagesLoaded(imagesLoaded + 1)}
                        src={paraList[i].photo.filePath} alt={paraList[i].photo.caption}
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
}