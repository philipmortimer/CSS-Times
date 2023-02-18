import { davidArticle } from "./DavidBernhard4Fa/DavidBernhard4Fa";
import { davidArticleFINAL } from "./DB4Fact/DB4Fact";
import { scotlandYard } from "./scotlandYardLawsuit/scotlandYardLawsuit";
import { chatGPTRuinedMarriage } from "./chatGPTRuinedMarriage/chatGPTRuinedMarriage";
import { joeCaught } from "./joeCaught/joeCaught";


// Assigns each article an ID
const articlesWithouId = [davidArticleFINAL, scotlandYard, chatGPTRuinedMarriage, joeCaught];
for (let i = 0; i < articlesWithouId.length; i++) {
    articlesWithouId[i].setId(i);
}
/**
 * This list of articles.
 */
export const articles = articlesWithouId
