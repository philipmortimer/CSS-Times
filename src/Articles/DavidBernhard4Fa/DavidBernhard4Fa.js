import {Picture} from '../Picture';
import {Paragraph} from '../Paragraph';
import {ArticleComment} from '../ArticleComment'
import {Article} from '../Article'
/*
********************************
   DISUSED - JUSE AN EXAMPLE
********************************
*/


// Variables used to create object
const headline = "David Bernhard: Why we need 4 factor authentication.";

const author = "Jeremy Colfer";

const publishDate = new Date("February 18 2023 10:30");

const summaryForHomePage =  "The letter says officers are accused of sharing derogatory images" + 
 "of the celebrity's disabled son.";

const mainPhoto = new Picture("/Images/Articles/DavidBernhard4Fa/KatiePriceImageMain.jpg",
  'Twenty-year-old Harvey has Prader-Willi syndrome, which can cause learning difficulties');

// Paragraphs *********************************************************************************
const para1 = new Paragraph(
  <p> 
    <strong>
    Katie Price has published a letter from the Met Police telling her
    officers are facing misconduct proceedings over alleged involvement in a WhatsApp group that targeted
    her disabled son Harvey. 
    </strong>
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para2 = new Paragraph(
  <p>
    The television star and model called the alleged behaviour "disgusting".
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para3 = new Paragraph(
  <p>
    The Met Police said it was "unable to discuss the allegations".
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para4 = new Paragraph(
  <p>
    The revelation of the letter by Price comes 18 months after she called for eight officers 
    under investigation for allegedly sharing inappropriate material about Harvey on WhatsApp to
     be <a href = "https://www.bbc.co.uk/news/uk-england-london-58009788">"named and shamed"</a>. 
     She added: "I don't like the police being horrible to Harvey."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para5 = new Paragraph(
  <p>
    paragph with picture and heading
  </p>,
  new Picture("/Images/Articles/DavidBernhard4Fa/katepriceinsta.png", 
  'Price said the the officers facing allegations of misconduct need to be "named, shamed and exposed"'),
  'Heading'
);

const para6 = new Paragraph(
  <p>
    paragph with picture no heading
  </p>,
  new Picture("/Images/Articles/DavidBernhard4Fa/katepriceinsta.png", 
  'Price said the the officers facing allegations of misconduct need to be "named, shamed and exposed"'),
  Paragraph.NO_HEADING
);

const para7 = new Paragraph(
  <p>
    paragph with no picture and a heading
  </p>,
  Paragraph.NO_PHOTO,
  'Heading Example'
);

const para8 = new Paragraph(
  <p>
    Last pargraph. this was annoying to do.
  </p>,
  Paragraph.NO_PHOTO,
  Paragraph.NO_HEADING
);

const paragraphs = [para1, para2, para3, para4, para5, para6, para7, para8];

// End of paragraphs

// Start of comments ***********************************
const comment1 = new ArticleComment("philip", "Nice article!");

const comment2 = new ArticleComment("Jezza", "Bad Article");

const comment3 = new ArticleComment("Jason", "Mid Article");

const comment4 = new ArticleComment("leelee", "Just right Article");

const comments = [comment1, comment2, comment3, comment4];

// End of comments

/**
 * The newspaper article for david.
 */
export const davidArticle = new Article(
  headline, author, publishDate, summaryForHomePage, mainPhoto, paragraphs, comments, Article.NO_ID__YET
);
