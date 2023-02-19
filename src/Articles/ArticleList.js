import { davidArticle } from "./DavidBernhard4Fa/DavidBernhard4Fa";
import { davidArticleFINAL } from "./DB4Fact/DB4Fact";
import { scotlandYard } from "./scotlandYardLawsuit/scotlandYardLawsuit";
import { chatGPTRuinedMarriage } from "./chatGPTRuinedMarriage/chatGPTRuinedMarriage";
import { joeCaught } from "./joeCaught/joeCaught";
import { weatherReport } from "./weatherReport/weatherReport";
import { mvbDoor } from "./mvbDoor/mvbDoor";
import { isThisArt } from "./isThisArt/isThisArt";


// Assigns each article an ID
const articlesWithouId = [davidArticleFINAL, weatherReport, scotlandYard, chatGPTRuinedMarriage, joeCaught, mvbDoor, isThisArt];
for (let i = 0; i < articlesWithouId.length; i++) {
    articlesWithouId[i].setId(i);
}
/**
 * This list of articles.
 */
export const articles = articlesWithouId
