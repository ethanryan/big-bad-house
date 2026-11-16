import Image from "next/image";
import type { Book } from "@/data/books";
import styles from "./BookEntry.module.css";

type Props = {
  book: Book;
  index: number;
};

export function BookEntry({ book, index }: Props) {
  const titleId = `${book.slug}-title`;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={book.cover ? `${styles.book} ${styles.hasCover}` : styles.book}
      aria-labelledby={titleId}
    >
      {book.cover && (
        <div className={styles.cover}>
          <Image
            src={book.cover.src}
            width={book.cover.width}
            height={book.cover.height}
            alt={`Cover of ${book.title}`}
            sizes="(min-width: 960px) 22vw, (min-width: 640px) 40vw, 70vw"
            priority={index === 0}
          />
        </div>
      )}
      <div className={styles.text}>
        <p className={styles.kicker}>
          <span className={styles.number} aria-hidden="true">
            {number}
          </span>
          <span>{book.category}</span>
        </p>
        <h3 id={titleId} className={styles.title}>
          {book.title}
        </h3>
        <p className={styles.author}>
          <span className={styles.by}>by </span>
          {book.author}
        </p>
        {book.blurb && <p className={styles.blurb}>{book.blurb}</p>}
        <a className={styles.buy} href={book.amazonUrl}>
          View on Amazon
          <span className="visually-hidden">: {book.title}</span>
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
