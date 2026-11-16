import { BookEntry } from "@/components/BookEntry";
import { books } from "@/data/books";
import { site } from "@/data/site";
import styles from "./page.module.css";

export const ensureStatic = "navigation";

export default function Home() {
  return (
    <>
      <header className={styles.masthead}>
        <h1 className={styles.wordmark}>
          <span>Big</span> <span>Bad</span> <span>House</span>
        </h1>
        <div className={styles.strap}>
          <p className={styles.descriptor}>{site.descriptor}</p>
          <p className={styles.huff}>Huff. Puff. Publish.</p>
        </div>
      </header>

      <main>
        <section className={styles.books} aria-labelledby="books-heading">
          <h2 id="books-heading" className={styles.sectionLabel}>
            Books
          </h2>
          <ol className={styles.bookList}>
            {books.map((book, index) => (
              <li key={book.slug}>
                <BookEntry book={book} index={index} />
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.about} aria-labelledby="about-heading">
          <h2 id="about-heading" className={styles.sectionLabel}>
            About
          </h2>
          <p className={styles.aboutCopy}>
            Big Bad House is an independent publishing and media company. The
            books featured here were originally self-published by their authors
            and are available in print and ebook editions.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerName}>{site.name}</p>
      </footer>
    </>
  );
}
