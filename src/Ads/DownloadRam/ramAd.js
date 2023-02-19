import {Picture} from '../Picture';
import {Ad} from '../Ad'
import mainPhotoPath from "./downloadRAM.jpg";

const mainPhoto = new Picture(mainPhotoPath,
"Free Ram Download")
const linkText = "Explore Ram";
const linkHref = "https://www.linkedin.com/in/rlarg/?locale=es_ES";

export const ramAd = new Ad(mainPhoto, linkText, linkHref)