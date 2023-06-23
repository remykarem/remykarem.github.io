# README for books

! Do not run `mdbook clean`.

Install mdbook and the following:
* [mdbook-toc](https://github.com/badboy/mdbook-toc) — table of contents
* [mdbook-last-changed](https://github.com/badboy/mdbook-last-changed) — last updated
* [mdbook-catppuccin](https://github.com/catppuccin/mdBook) — pastel themes
* [mdbook-katex](https://github.com/lzanini/mdbook-katex) — render math using `$`
* [mdbook-admonish](https://github.com/tommilligan/mdbook-admonish) — Material Design admonishments
* [mdbook-mermaid](https://github.com/badboy/mdbook-mermaid) — Mermaid

```
cargo install mdbook mdbook-toc mdbook-last-changed mdbook-catppuccin mdbook-katex mdbook-admonish mdbook-mermaid
```

## Creating a new book

1. Go into `books`.

2. Create a folder `books/your-book` and `cd` into it.

3. Run `mdbook init`.

4. Update the `books/your-book/book.toml` file with:

    ```toml
    [book]
    authors = ["Raimi"]
    language = "en"
    multilingual = false
    src = "src"
    title = "your-book"

    [output.html]
    site-url = "/books/your-book/html"  # this is for mathy books. for non-mathy, use "/books/your-book"
    mathjax-support = true
    git-repository-url = "https://github.com/remykarem/remykarem.github.io" # Required for preprocess.last-changed
    additional-css = ["last-changed.css"]
    default-theme = "frappé"
    preferred-dark-theme = "macchiato"
    no-section-label = true

    [build]
    build-dir = "."  # this is for mathy books. for non-mathy, use "./html"

    [preprocessor.toc]
    command = "mdbook-toc"
    renderer = ["html"]

    [preprocessor.last-changed]
    command = "mdbook-last-changed"
    renderer = ["html"]

    [output.katex]

    [preprocessor.katex]
    renderers = ["html"]
    ```

5. Add `books/src/your-book/last-changed.css`:

    ```css
    footer {
        font-size: 0.8em;
        font-style: italic;
        text-align: center;
        border-top: 1px solid black;
        padding: 5px 0;
    }
    ```

6. Run other preprocessors

    ```bash
    mdbook-admonish install
    mdbook-catppuccin install
    mdbook-mermaid install
    ```

7. Update `books/index.html`.
