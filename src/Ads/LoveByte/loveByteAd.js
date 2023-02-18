import {Picture} from '../Picture';
import {Ad} from '../Ad'
import mainPhotoPath from "./loveByte.jpg";

const mainPhoto = new Picture(mainPhotoPath,
"Love Byte - dating for CS students")
const linkText = "Find your kitten now";
const linkHref = "url(www.match.com)";

export const loveByteAd = new Ad(mainPhoto, linkText, linkHref)