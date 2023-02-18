
// Paragaph of text in news article.
export class Paragraph {
    /**
     * Used to indicate that no photo is present
     */
    static NO_PHOTO = null;
    /**
     * Used to indicate no heading is present
     */
    static NO_HEADING = "";
    /**
     * Creates a paragraph object with the text and corresponding photo.
     * @param {*} text The text as JSX style thing with p tags etc.
     * @param {Picture} photo The photo. Pass NO_PHOTO if no photo used
     * @param {string} heading The heading of the paragraph. Pass NO_HEADING if no heading
     */
    constructor(text, photo, heading) {
      this.text = text;
      this.photo = photo;
      this.heading = heading;
    }
}
