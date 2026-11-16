import Image from "next/image";
import type { Book } from "@/data/books";
import styles from "./BookEntry.module.css";

type Props = {
  book: Book;
  index: number;
};

export function BookEntry({ book, index }: Props) {
  const titleId = `${book.slug}-title`;

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
            sizes="(min-width: 768px) 192px, 224px"
            priority={index === 0}
          />
        </div>
      )}
      <div className={styles.text}>
        <p className={styles.kicker}>
          {book.category}
        </p>
        <h3 id={titleId} className={styles.title}>
          {book.title}
        </h3>
        <p className={styles.author}>
          <span className={styles.by}>by </span>
          {book.author}
        </p>
        {book.blurb && <p className={styles.blurb}>{book.blurb}</p>}
      </div>
      <a
        className={styles.buy}
        href={book.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View on Amazon: ${book.title} (opens in a new tab)`}
      >
        View on Amazon
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </a>
    </article>
  );
}
