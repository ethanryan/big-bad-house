/**
 * The Big Bad House catalog. Entries render on the homepage in this order.
 *
 * To add a cover, put the original file in `public/covers/` and set `cover`
 * with its pixel dimensions (the page keeps that aspect ratio). Books without
 * a cover render as typographic entries.
 *
 * Keep publisher attribution out of these entries: the listed editions were
 * self-published by their authors before Big Bad House existed.
 */

export type BookCover = {
  /** Path under `public/`, e.g. "/covers/fan-fiction.jpg". */
  src: string;
  /** Intrinsic pixel width of the file. */
  width: number;
  /** Intrinsic pixel height of the file. */
  height: number;
};

export type Book = {
  /** Unique, URL-safe id. Used for element ids. */
  slug: string;
  title: string;
  /** Byline exactly as credited on the edition. */
  author: string;
  category: string;
  amazonUrl: string;
  /** Approved blurb only. Leave unset rather than writing new copy. */
  blurb?: string;
  cover?: BookCover;
};

export const books: Book[] = [
  {
    slug: "fan-fiction",
    title: "Fan Fiction",
    author: "Ethan Ryan",
    category: "Short story collection",
    amazonUrl: "https://www.amazon.com/dp/B088Q5VD3D",
  },
  {
    slug: "sunny-gardens",
    title: "Sunny Gardens",
    author: "Ethan Ryan",
    category: "Short story collection",
    amazonUrl: "https://www.amazon.com/Sunny-Gardens-Ethan-Ryan/dp/B0D3BLB8YD",
  },
  {
    slug: "disney-orgy",
    title: "Disney Orgy",
    author: "Alexa Graves",
    category: "Novel",
    amazonUrl: "https://www.amazon.com/dp/B0DFZQNZTH",
  },
];
