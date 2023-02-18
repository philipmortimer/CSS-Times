import {Picture} from '../Picture';
import {Paragraph} from '../Paragraph';
import {ArticleComment} from '../ArticleComment'
import {Article} from '../Article'

// Variables used to create object
const headline = "BREAKING: Student Wins Lawsuit Against OpenAI's ChatGPT";

const author = "Arnold Becker";

const publishDate = new Date("February 19 2023 11:00");

const summaryForHomePage =  "Bristol, UK: In a shocking turn of events, a computer science student from the University" +
    " of Bristol has won a major lawsuit against OpenAI, the creators of the AI language model ChatGPT."

const mainPhoto = new Picture('/Images/Articles/scotlandYardLawsuit/scotlandYardLawsuit.jpg',
  'Bristol University student versus OpenAi');

// Paragraphs *********************************************************************************
const para1 = new Paragraph(
  <p> 
    <strong>
    Bristol, UK: In a shocking turn of events, a computer science student from the University of Bristol has won a major
     lawsuit against OpenAI, the creators of the AI language model ChatGPT. Phillip Mortimer, who wishes to remain anonymous,
      claimed that ChatGPT was based on their coursework project "Scotland Yard" without their permission.

    </strong>
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para2 = new Paragraph(
  <p>
    The lawsuit, which lasted for several months, saw both sides present their arguments in front of a panel of tech experts.
     The student was able to provide strong evidence to support their claim, including code snippets and technical reports
      that closely matched the functionality of ChatGPT.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para3 = new Paragraph(
  <p>
    In a statement released by the student, they said, "I'm extremely grateful to have been given the opportunity to prove 
    that my work was used without my consent. As a student, it's disheartening to see my hard work being used for commercial
     gain without proper recognition."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para4 = new Paragraph(
  <p>
    OpenAI, on the other hand, stated that they had no knowledge of the student's project and that the similarities
     were purely coincidental. However, the panel was not convinced and ruled in favor of the student.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para5 = new Paragraph(
  <p>
    The ruling has caused a stir in the tech industry, with many questioning the ethics of using students' work without 
    proper compensation or recognition. The student is expected to receive a significant sum in damages and will also 
    receive proper credit for their work in future iterations of ChatGPT.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para6 = new Paragraph(
  <p>
    This landmark ruling sets a new precedent for the treatment of student projects in the tech industry and sends a 
    clear message that proper recognition and compensation must be given for the use of such work."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para7 = new Paragraph(
  <p>
    The student, who is now being hailed as a hero among their peers, has decided to donate a portion of the damages
     to the computer science department at the University of Bristol to support future students and their projects.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const paragraphs = [para1, para2, para3, para4, para5, para6, para7];

// End of paragraphs

// Start of comments ***********************************
const comment1 = new ArticleComment("Adem Blackwell", "But he stole my AI to begin with!");

const comment2 = new ArticleComment("Rowan Pacheco", "nice to see the little guys winning one.");

const comment3 = new ArticleComment("Salman Khan", "Mid.");

const comments = [comment1, comment2, comment3];

// End of comments

/**
 * The newspaper article for david.
 */
export const scotlandYard = new Article(
  headline, author, publishDate, summaryForHomePage, mainPhoto, paragraphs, comments, Article.NO_ID__YET
);
