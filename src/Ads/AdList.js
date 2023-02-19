import { strikeOdds } from "./strikeOdds/strikeOdds.js";
import { loveByteAd } from "./LoveByte/loveByteAd";
import { ramAd } from "./DownloadRam/ramAd";


// Assigns each ad an ID
const adsWithouId = [strikeOdds, loveByteAd, ramAd];
for (let i = 0; i < adsWithouId.length; i++) {
    adsWithouId[i].setId(i);
}
/**
 * This list of articles.
 */
export const ads = adsWithouId;
