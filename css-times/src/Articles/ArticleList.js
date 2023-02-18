import { davidArticle } from "./DavidBernhard4Fa/DavidBernhard4Fa";

// Assigns each article an ID
const articlesWithouId = [davidArticle];
for (let i = 0; i < articlesWithouId.length; i++) {
    articlesWithouId[i].setId(i);
}
/**
 * This list of articles.
 */
export const articles = articlesWithouId
