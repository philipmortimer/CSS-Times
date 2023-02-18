import {Picture} from '../Picture';
import {Paragraph} from '../Paragraph';
import {ArticleComment} from '../ArticleComment'
import {Article} from '../Article'

// Variables used to create object
const headline = "David Bernhard: Why Bristol needs 4 factor authentication";

const author = "Ron Hentze";

const publishDate = new Date("February 18 2023 10:30");

const summaryForHomePage =  "With an ever increasing threat to our digital lifes, Bristol University professor David Bernhard " +
    "talks on the necessitiy of 4-factor authentication.";

const mainPhoto = new Picture("/Images/Articles/DB4Fact/4factauth.jpg",
  'David Bernhard giving a talk on the importance of 4-factor authentication');

// Paragraphs *********************************************************************************
const para1 = new Paragraph(
  <p> 
    <strong>
    In a shocking revelation, cybersecurity expert David Bernhard has declared that two-factor authentication just isn't enough.
     The world needs four-factor authentication. This comes as a surprise to many, especially considering the widespread 
     disdain for the current two-factor system.
    </strong>
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para2 = new Paragraph(
  <p>
    In a recent survey of college students, it was found that the majority of respondents loathed having to use two-factor
     authentication. Complaints ranged from "It's just too much work" to "I don't even understand what's happening." 
     Despite this, Bernhard remains steadfast in his belief that we need even more protection for our online accounts.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para3 = new Paragraph(
  <p>
    When asked to explain his reasoning, Bernhard replied, "Look, I know two-factor is a hassle. But think about it this way 
    – would you rather be slightly inconvenienced now or have your entire life ruined by a hacker later? The answer is obvious."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para4 = new Paragraph(
  <p>
    He went on to elaborate that the four factors would include: something you know (like a password), something you have 
    (like a phone), something you are (biometrics), and something you love (yes, you heard that right). 
    Bernhard believes that requiring a user to provide proof of their affection for their significant other, 
    pet, or favorite sports team will add an extra layer of security that can't be hacked.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para5 = new Paragraph(
  <p>
    The experts at the cybersecurity community are divided on this issue. While some believe that four-factor authentication
     is excessive and unnecessary, others are advocating for the extra protection.

  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para6 = new Paragraph(
  <p>
    As for the college students surveyed, they remain unimpressed. One student quipped, "So you want me to remember a password,
     carry my phone, scan my fingerprint, and show love for my cat? Sorry, I think I'll just stick to writing my passwords 
     on a sticky note."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para7 = new Paragraph(
  <p>
    It remains to be seen whether the four-factor system will catch on, but one thing is for sure – cybersecurity is no 
    laughing matter. And neither is showing love for your cat.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const paragraphs = [para1, para2, para3, para4, para5, para6, para7];

// End of paragraphs

// Start of comments ***********************************
const comment1 = new ArticleComment("Anthony Price", "Coludn't agree more!");

const comment2 = new ArticleComment("Bob Ross", "Is 4 really enough?");

const comment3 = new ArticleComment("Katie Price", "Mid Article");

const comments = [comment1, comment2, comment3];

// End of comments

/**
 * The newspaper article for david.
 */
export const davidArticleFINAL = new Article(
  headline, author, publishDate, summaryForHomePage, mainPhoto, paragraphs, comments, Article.NO_ID__YET
);
