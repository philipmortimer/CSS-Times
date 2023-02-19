import {Picture} from '../Picture';
import {Paragraph} from '../Paragraph';
import {ArticleComment} from '../ArticleComment'
import {Article} from '../Article'

// Main photos
import headlinePhoto from './Images/slightlySunny.jpg';

// Variables used to create object
const headline = "WEATHER WARNING: Stay Inside! It's Slightly Sunny Today";

const author = "Alex Beresford";

const publishDate = new Date("February 19 2023 09:00");

const summaryForHomePage =  "Attention all Computer Science Students, please be careful." +
    " There is a chance of of sun today, please read this article to find out how to stay protected."

const mainPhoto = new Picture(headlinePhoto,
  'WARNING: It is going to be slightly sunny today.');

// Paragraphs *********************************************************************************
const para1 = new Paragraph(
  <p> 
    <strong>
    Attention all computer science students! It's a beautiful day outside and the sun is shining, but beware!
     The rays of the sun have been known to cause harm to those who spend all their time indoors coding.
    </strong>
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para2 = new Paragraph(
  <p>
    Studies have shown that exposure to sunlight can lead to decreased screen time, increased physical activity, and even 
    vitamin D production. We know, we know – the idea of leaving your computer screen is frightening, but it's important 
    to remember that your health should always come first.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para3 = new Paragraph(
  <p>
    So, for the safety of all computer science students, we advise you to stay indoors and avoid any and all sunlight.
     Remember, you can always catch a glimpse of the sun through your computer screen, no need to risk your well-being
      by stepping outside.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para4 = new Paragraph(
  <p>
    If you must venture outside, be sure to protect yourself with multiple layers of clothing, a computer screen to
     shield your face, and a USB-powered sunblock for added protection.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para5 = new Paragraph(
  <p>
    Stay safe, stay indoors, and keep coding! The future of technology depends on you.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const paragraphs = [para1, para2, para3, para4, para5];

// End of paragraphs

// Start of comments ***********************************
const comment1 = new ArticleComment("Chris Hudson", "It's true! I looked at the sun once and my code has never been the same.");

const comment2 = new ArticleComment("Rowan Pacheco", "Cozzie Livs Crisis, can't afford boody suncream.");

const comments = [comment1, comment2];

// End of comments

/**
 * The newspaper article for david.
 */
export const weatherReport = new Article(
  headline, author, publishDate, summaryForHomePage, mainPhoto, paragraphs, comments, Article.NO_ID__YET
);
