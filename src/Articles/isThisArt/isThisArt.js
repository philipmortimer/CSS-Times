import {Picture} from '../Picture';
import {Paragraph} from '../Paragraph';
import {ArticleComment} from '../ArticleComment'
import {Article} from '../Article'

// Variables used to create object
const headline = "Is This Even Art? ArtHack Entry Sparks Debate Among Competitors";

const author = "Wilfred Leonard";

const publishDate = new Date("February 19 2023 09:00");

const summaryForHomePage =  "In the 2023 ArtHack competition fights broke out over a controversial student paper entry." +
    " Many competitors argured if this were art, but the judges disagreed."

const mainPhoto = new Picture("/Images/Articles/weatherReport/slightlySunny.jpg",
  'WARNING: It is going to be slightly sunny today.');

// Paragraphs *********************************************************************************
const para1 = new Paragraph(
  <p> 
    <strong>
    In the 2023 ArtHack competition, a student newspaper, The CSS Times, has sparked a heated debate among the competitors, with some 
    arguing that the entry, is not art.
    </strong>
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para2 = new Paragraph(
  <p>
    The entry in question is a satirical take on society, hitting relevent topics such as biased media and AI. The 
    student team responsible for the piece insists that it is a work of art, but some of the other competitors 
    are not convinced.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para3 = new Paragraph(
  <p>
    "I mean, come on, this is just a bunch of gibberish on a computer," said one competitor, who wished to
     remain anonymous. "Where's the creativity in that?"
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para4 = new Paragraph(
  <p>
    Others, however, were quick to come to the defense of the student team.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para5 = new Paragraph(
  <p>
    "Art is about pushing boundaries and exploring new ideas," said another competitor. "And that's exactly what
     this piece does. It challenges our preconceptions about what art can be."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para6 = new Paragraph(
  <p>
    The debate quickly escalated, with both sides presenting impassioned arguments for their positions. At one
    point, a fistfight even broke out between two particularly heated competitors.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para7 = new Paragraph(
  <p>
    In the end, however, the judges ultimately decided to award the prize to the CSS Times, citing its
     innovative use of AI technology and its ability to spark important discussions about the role of technology
     in art.
    </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

  const para8 = new Paragraph(
    <p>
    The student team behind the entry were ecstatic about their win, but remained humble in victory.
    </p>,
    Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para9 = new Paragraph(
  <p>
   "We knew that we were taking a risk with this piece," said one member of the team. "But we're just thrilled
    that people were willing to engage with it and think critically about what art really means."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para10 = new Paragraph(
  <p>
    As for the other competitors, many of whom were still seething with anger over the judges' decision, they 
    vowed to come back stronger next year, determined to prove once and for all that art should be created by 
    humans, not machines.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);
  
  const para11 = new Paragraph(
    <p>
      But for now, the CSS Times can bask in the glory of its victory, secure in the knowledge that, at
       least for a little while, it managed to spark a rich philosophical debate among the art hack community.
    </p>,
    Paragraph.NO_PHOTO, Paragraph.NO_HEADING);
    

const paragraphs = [para1, para2, para3, para4, para5, para6, para7, para8, para9, para10, para11];

// End of paragraphs

// Start of comments ***********************************

const comment1 = new ArticleComment("REDACTED", "THIS IS RIGGED");

const comments = [comment1];

// End of comments

/**
 * The newspaper article for david.
 */
export const isThisArt = new Article(
  headline, author, publishDate, summaryForHomePage, mainPhoto, paragraphs, comments, Article.NO_ID__YET
);
