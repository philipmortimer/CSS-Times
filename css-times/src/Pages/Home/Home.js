import { Disclaimer } from "./Disclaimer/Disclaimer";
import {articles} from '../../Articles/ArticleList';
export const Home = (props) => {
    console.log(articles);
    return (
        <Disclaimer />
    );
}