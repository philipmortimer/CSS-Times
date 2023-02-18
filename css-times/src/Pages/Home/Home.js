import { Disclaimer } from "./Disclaimer/Disclaimer";
import './Home.css'
import {articles} from "../../Articles/ArticleList"
import { Thumbnail } from "./Thumbnail";
import { Top } from "./Top.js"

export const Home = (props) => {
    console.log(articles)
    return (
        <div className="homepage">
        <Top></Top>
        <div className="articles-container">

            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            <Thumbnail className="article-thumbnail" article={articles[0]}></Thumbnail>
            
            </div>
            <div className="disclaimer-container">
                <Disclaimer/>
            </div>
        </div>

    );
}
        // <div className="Hompage">
        // <div className="Home-articles">
        //     <div className="featured-articles">
        //         <div className="big-article">
        //             <img src='/Images/Thumbnails/josephHalletCaughtWindows.jpg' alt="not found"/>
        //             <p className='thumbnail-headline'><strong>Katie Price things</strong></p>
        //             <p className='thumbnail-desc'>The letter says officers are accused of sharing derogatory images of the celebrity's disabled son.</p>

        //         </div>
        //         <div className="small-featured-articles">
        //             <div className="article">
        //             {/* C:\Users\jerem\Desktop\react\dojo-blog\public\Images\Thumbnails\16x9example.png */}
        //                 <img src='/Images/Thumbnails/16x9example.png' alt="not found"/>
        //                 <div className="thumbnail-text">
        //                     <p className='thumbnail-headline'><strong>Katie Price things</strong></p>
        //                     <p className='thumbnail-desc'>The letter says officers are accused of sharing derogatory images of the celebrity's disabled son.</p>
        //                 </div>                      
        //             </div>
        //             <div className="article"></div>
        //             <div className="article"></div>
        //             <div className="article"></div>
        //         </div>

        //     </div>

        //     <div className="standard-articles">
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //         <div className="article"></div>
        //     </div>

export default Home