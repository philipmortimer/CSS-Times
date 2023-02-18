export class ArticleComment {
    /**
     * Creates a comment, which is a username and text pair.
     * @param {string} userName User name
     * @param {string} comment Comment contents
     */
    constructor(userName, comment) {
        this.userName = userName;
        this.comment = comment;
    }
}