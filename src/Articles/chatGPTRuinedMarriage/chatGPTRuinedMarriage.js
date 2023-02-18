import {Picture} from '../Picture';
import {Paragraph} from '../Paragraph';
import {ArticleComment} from '../ArticleComment'
import {Article} from '../Article'

// Variables used to create object
const headline = "ChatGPT ruined my Marriage!";

const author = "Sabrina Leblanc";

const publishDate = new Date("February 29 2023 12:34");

const summaryForHomePage =  "Marriage on the Rocks: ChatGPT Blamed for Ruining Couple's Relationship. " +
"In a shocking turn of events, a couple from California has filed for divorce, blaming their split on none other than ChatGPT.";

const mainPhoto = new Picture("./Images/Articles/chatGPTRuinedMarriage/chatgtpRuinedMarriage.jpg",
  'A coupled wedding photo ripped in half, with chatGPT in the middle, looking all proud.');

// Paragraphs *********************************************************************************
const para1 = new Paragraph(
  <p> 
    <strong>
    Marriage on the Rocks: ChatGPT Blamed for Ruining Couple's Relationship. In a shocking turn of events, a couple from 
    California has filed for divorce, blaming their split on none other than ChatGPT, the artificial intelligence 
    language model. According to the couple, ChatGPT's uncanny ability to generate human-like text led to the breakdown 
    of their marriage.

    </strong>
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para2 = new Paragraph(
  <p>
    The wife, who wished to remain anonymous, claimed that her husband became obsessed with chatting with ChatGPT, spending
     hours on end asking it questions and having conversations. She says that their conversations became so realistic that
     she began to question if her husband was actually talking to a machine.
    The husband, however, denies these claims, saying that ChatGPT is just a harmless tool that helps him pass the time. He
    added that he never intended to hurt his wife and that he loves her deeply.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para3 = new Paragraph(
  <p>
    Despite the husband's protests, the couple has decided to end their marriage and seek a fresh start. The divorce proceedings 
    are set to begin next week, and ChatGPT is expected to be called as a witness.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para4 = new Paragraph(
  <p>
    This shocking development has sparked a debate among AI experts, who are divided on the role of artificial intelligence
     in relationships. Some believe that AI can enhance relationships, while others believe that it can lead to their downfall.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para5 = new Paragraph(
  <p>
    In any case, this divorce serves as a cautionary tale for anyone who uses AI, reminding us of the importance of balance
     and moderation in all things, even when it comes to our relationship with machines.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const paragraphs = [para1, para2, para3, para4, para5];

// End of paragraphs

// Start of comments ***********************************
const comment1 = new ArticleComment("philip", "Nice article!");

const comment2 = new ArticleComment("Jezza", "Bad Article");

const comment3 = new ArticleComment("Jason", "Mid Article");

const comment4 = new ArticleComment("leelee", "Just right Article");

const comments = [];//comment1, comment2, comment3, comment4];

// End of comments

/**
 * The newspaper article for david.
 */
export const chatGPTRuinedMarriage = new Article(
  headline, author, publishDate, summaryForHomePage, mainPhoto, paragraphs, comments, Article.NO_ID__YET
);
