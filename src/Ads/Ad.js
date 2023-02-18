
export class Ad {
    /**
     * Used to indicate that article ID has not yet been decided.
     */
    static NO_ID__YET = null;
    /**
     * Creates a new article.
     * @param {Picture} mainPhoto The Ad's image
     * @param {String} linkText The Ad's Link text
     * @param {String} linkHref The Ad's Link target address
     * @param {int} id article ID.
     */
    constructor( mainPhoto, linkText, id) {
            [this.mainPhoto, this.linkText, this.linkHref, this.id] =
              [mainPhoto, linkText, id];
        /**
        * Sets the article ID value. Can be used to update ID's, once all ID's are known
        * @param {*} id The article ID. Must be unique
        */
        Ad.prototype.setId = function (id) {
            this.id = id;
        };
    }
}