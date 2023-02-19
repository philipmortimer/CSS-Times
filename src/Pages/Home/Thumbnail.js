import { useState } from 'react';
import './Thumbnail.css';
import Moment from 'react-moment';

export const Thumbnail = (props) => {
    const myArticle = props.article

    return(
        <div className="thumbnail">
        <a className="articleLink" href={"/#/articles/" + props.article.id}>
            <img className="thumbnail-image"
            src={myArticle.mainPhoto.filePath} alt={myArticle.mainPhoto.caption}/>
            <div className="thumbnail-text">
                <p className="thumbnail-headline"><strong>{myArticle.headline}</strong></p>
                <p className="thumbnail-descr">{myArticle.summaryForHomePage}</p>
                <Moment className="thumbnail-date" locale='uk' format='LL'
                filter={(str) => str.replace(',', ' ')}>
                    {props.article.publishDate}
            </Moment>
            </div>
        </a>
        </div>);
}