import {Picture} from '../Picture';
import {Paragraph} from '../Paragraph';
import {ArticleComment} from '../ArticleComment'
import {Article} from '../Article'

// Photo imports
import headlinePhoto from './Images/photographerStrike16x9.jpg'

// Variables used to create object
const headline = "CSS Times Photographer Has Started Striking";

const author = "Byron Briggs";

const publishDate = new Date("February 20 2023 04:43");

const summaryForHomePage =  "Please come back. We'll give you a raise. We may even give you minimum wage."

const mainPhoto = new Picture(headlinePhoto,
  'A paper illustration of the photographer on strike');

// Paragraphs *********************************************************************************
const para1 = new Paragraph(
  <p> 
    <strong>
    Students at the University of Bristol are planning a strike over a seemingly
     trivial issue - the door to the "MVB Linux Lab" not working ... sometimes.
    </strong>
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para2 = new Paragraph(
  <p>
    The students, who are primarily enrolled in computer science and engineering courses, have grown increasingly frustrated
     with the door, which they claim has been broken for weeks. Despite numerous attempts to repair the door, it continues 
     to cause frustration and delays for the students.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para3 = new Paragraph(
  <p>
    In a statement released by the student union, they said, "We have had enough. The door to the MVB Linux Lab is essential
     for our studies, and the constant breakdowns are causing a significant disruption to our learning. We demand immediate
      action to be taken to fix the door, or we will be forced to take matters into our own hands."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para4 = new Paragraph(
  <p>
    The strike, which is set to take place next week, has caused a stir on campus, with many students expressing their
     support for the cause. Some have even gone as far as to suggest alternative solutions, including installing a 
     revolving door or replacing the door with a retractable one.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para5 = new Paragraph(
  <p>
    The university administration has responded to the situation, stating that they are aware of the issue and are working
     to find a solution as quickly as possible. However, the students remain unimpressed and are determined to carry out 
     their strike as planned.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para6 = new Paragraph(
  <p>
    This is not the first time that students at the University of Bristol have taken a stand for what they believe in. In
     the past, they have staged walkouts over issues such as lack of funding for research and poor living conditions in
      student housing.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para7 = new Paragraph(
  <p>
    The situation is ongoing, and it remains to be seen what will happen in the coming days. One thing is for sure,
     the students of the University of Bristol are not afraid to stand up for what they believe in, even if it's over
      a broken door."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const paragraphs = [para1, para2, para3, para4, para5, para6, para7];

// End of paragraphs

// Start of comments ***********************************
const comment1 = new ArticleComment("Liam Jones", "Nothing worse than when your UCard doesn't work and then you've got to awkwardly wait for someone to let you in.");

const comment2 = new ArticleComment("Liberty Rollins", "Unpopular opinion, but we don't even need doors.");

const comment3 = new ArticleComment("Haydn Olsen", "slay");

const comments = [comment1, comment2, comment3];

// End of comments

/**
 * The newspaper article for david.
 */
export const PhotoStrike = new Article(
  headline, author, publishDate, summaryForHomePage, mainPhoto, paragraphs, comments, Article.NO_ID__YET
);
