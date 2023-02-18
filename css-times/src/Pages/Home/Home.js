import { Disclaimer } from "./Disclaimer/Disclaimer";
import './Home.css'
import {articles} from "../../Articles/ArticleList"
import { Thumbnail } from "./Thumbnail";
import { Top } from "./Top.js"
import React from 'react';

export const Home = (props) => {
    return (
        <div className="homepage">

    
     
            
            <div className="articles-container">
                {getThumbnails(articles)}
            </div>
            <div className="disclaimer-container">
                    <Disclaimer/>
            </div>
        </div>

    );

    /**
     * Gets the list of thumbnails.
     * @param {[Article]} articleList The articles
     * @returns The JSX for all the thumbnails
     */
    function getThumbnails(articleList) {
        const thumbnails = [];
        for (let i = 0; i < articleList.length; i++) {
            thumbnails.push(
                <React.Fragment key={i}>
                    <Thumbnail className="article-thumbnail" article={articleList[i]} />
                </React.Fragment>
            );
        }
        return thumbnails;
    }
}

export default Home