import {Picture} from '../Picture';
import {Ad} from '../Ad'
import mainPhotoPath from "./yesWeKhan.png";

const mainPhoto = new Picture(mainPhotoPath,
"Salman, yes we, Khan Poster")
const linkText = "Find your kitten now";
const linkHref = "";

export const salmanAd = new Ad(mainPhoto, linkText, linkHref)