// Stores image path and caption. Note all article images must be 16 x 9 ratio.
export class Picture {
  constructor(filePath, caption) {
    this.filePath = filePath;
    this.caption = caption;
  }
}