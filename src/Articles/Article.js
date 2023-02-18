export class Article {
    /**
     * Used to indicate that article ID has not yet been decided.
     */
    static NO_ID__YET = null;
    /**
     * Creates a new article.
     * @param {string} headline The article headline.
     * @param {string} author The author name.
     * @param {Date} publishDate The date the article was published.
     * @param {string} summaryForHomePage The summary of the article displayed on the home page.
     * This is not displayed in the article but is displayed on the home page.
     * @param {Picture} mainPhoto The main photo that appears at the start of the article.
     * @param {[Paragraph]} paragraphs The paragraphs.
     * @param {[ArticleComment]} comments The article comments.
     * @param {int} The article ID.
     */
    constructor(headline, author, publishDate, summaryForHomePage,
        mainPhoto, paragraphs, comments, id) {
            [this.headline, this.author, this.publishDate, this.summaryForHomePage,this.mainPhoto,
                this.paragraphs, this.comments, this.id] = [headline, author, publishDate, 
                    summaryForHomePage, mainPhoto, paragraphs, comments, id];
        /**
        * Sets the article ID value. Can be used to update ID's, once all ID's are known
        * @param {*} id The article ID. Must be unique
        */
        Article.prototype.setId = function (id) {
            this.id = id;
        };
    }
}