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
          <p className={styles.motto}>Good Stories. Bad Behavior.</p>
        </div>
        <p className={styles.lede}>{site.tagline}</p>
      </header>

      <main>
        <section className={styles.books} aria-labelledby="books-heading">
          <h2 id="books-heading" className={styles.sectionLabel}>
            Books
          </h2>
          <ul className={styles.bookList}>
            {books.map((book, index) => (
              <li key={book.slug}>
                <BookEntry book={book} index={index} />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.about} aria-labelledby="about-heading">
          <h2 id="about-heading" className={styles.sectionLabel}>
            About
          </h2>
          <div className={styles.aboutBody}>
            <p className={styles.aboutCopy}>
              Big Bad House is an independent publishing and media company. The
              books featured here were originally self-published by their
              authors and are available in print and ebook editions.
            </p>
            <h3 className={styles.aboutHeading}>Why Big Bad?</h3>
            <p className={styles.aboutCopy}>
              We love stories with conflict, and nothing stirs up trouble quite
              like a{" "}
              <a
                className={styles.inlineLink}
                href="https://en.wikipedia.org/wiki/Big_Bad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Big Bad (opens in a new tab)"
              >
                Big Bad
              </a>
              &nbsp;— the villain, monster, or antagonist who makes a story worth
              telling. Big Bad House is the kind of place where the
              Big Bad Wolf would feel welcome.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerName}>{site.name}</p>
        </div>
      </footer>
    </>
  );
}
