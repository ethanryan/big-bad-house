# Big Bad House

The homepage for [bigbadhouse.com](https://bigbadhouse.com): a single static page built with Next.js (App Router), TypeScript and CSS Modules.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

Checks:

```bash
npm run build    # production build (the homepage must stay fully static)
npm run lint
npx tsc --noEmit
```

## Edit the catalog

All books live in [`data/books.ts`](data/books.ts) and appear on the page in the order listed. Each entry has:

| Field       | Required | Notes                                                        |
| ----------- | -------- | ------------------------------------------------------------ |
| `slug`      | yes      | Unique, URL-safe id                                          |
| `title`     | yes      |                                                              |
| `author`    | yes      | Byline exactly as credited                                   |
| `category`  | yes      | e.g. "Novel", "Short story collection"                       |
| `amazonUrl` | yes      | Listing the "View on Amazon" button links to                 |
| `blurb`     | no       | Approved copy only                                           |
| `cover`     | no       | See below. Without one, the book renders as a type-only entry |

These editions predate Big Bad House, so keep publisher attribution out of the book entries.

Site-wide name, URL, descriptor and meta description are in [`data/site.ts`](data/site.ts).

## Add a cover

1. Put the original file in `public/covers/`, for example `public/covers/fan-fiction.jpg` (JPG, PNG, WebP or AVIF).
2. Add a `cover` with the file's pixel dimensions to that book in `data/books.ts`:

   ```ts
   cover: { src: "/covers/fan-fiction.jpg", width: 1600, height: 2560 },
   ```

   On macOS, `sips -g pixelWidth -g pixelHeight public/covers/fan-fiction.jpg` prints the dimensions. The page keeps the file's aspect ratio, and `next/image` serves resized copies.

Use local files only. Don't hotlink Amazon images.

## Follow-ups

1. **Email signup.** This is the first follow-up after launch.

Deployment and DNS for bigbadhouse.com are handled separately.
