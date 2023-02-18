export class Article {
    /**
     * Creates a new article
     * @param {string} headline The article headline.
     * @param {string} author The author name.
     * @param {Date} publishDate The date the article was published.
     * @param {string} summaryForHomePage The summary of the article displayed on the home page.
     * This is not displayed in the article but is displayed on the home page.
     * @param {Picture} mainPhoto The main photo that appears at the start of the article.
     * @param {[Paragraph]} paragraphs The paragraphs.
     * @param {[ArticleComment]} comments The article comments.
     */
    constructor(headline, author, publishDate, summaryForHomePage,
        mainPhoto, paragraphs, comments) {
            [this.headline, this.author, this.publishDate, this.summaryForHomePage,this.mainPhoto,
                this.paragraphs, this.comments] = [headline, author, publishDate, summaryForHomePage, 
                    mainPhoto, paragraphs, comments];
    }
}