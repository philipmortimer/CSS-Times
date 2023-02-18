import { strikeOdds } from "./strikeOdds/strikeOdds.js";
import { loveByteAd } from "./LoveByte/loveByteAd";

// Assigns each ad an ID
const adsWithouId = [strikeOdds, loveByteAd];
for (let i = 0; i < adsWithouId.length; i++) {
    adsWithouId[i].setId(i);
}
/**
 * This list of articles.
 */
export const ads = adsWithouId;
