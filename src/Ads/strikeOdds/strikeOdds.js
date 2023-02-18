import {Picture} from '../Picture';
import {Ad} from '../Ad'
import mainPhotoPath from './bet365ad.jpg'

const mainPhoto = new Picture(mainPhotoPath,
"odds on lecturers striking: 5 to 1!")
const linkText = "Gamble on your education now";
const linkHref = "google.com";

export const strikeOdds = new Ad(mainPhoto, linkText, linkHref)