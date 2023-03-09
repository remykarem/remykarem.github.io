# README for books

Install mdbook and the following:
* [mdbook-toc](https://github.com/badboy/mdbook-toc) — table of contents
* [mdbook-last-changed](https://github.com/badboy/mdbook-last-changed) — last updated
* [mdbook-catppuccin](https://github.com/catppuccin/mdBook) — pastel themes
* [mdbook-katex](https://github.com/lzanini/mdbook-katex) — render math using `$`

```
cargo install mdbook mdbook-toc mdbook-last-changed mdbook-catppuccin mdbook-katex
```

## Creating a new book

1. Go into `books/src`.

2. Create a folder `your-book` and `cd` into it.

3. Run `mdbook init`.

4. Update the `books/src/your-book/book.toml` file with:

    ```toml
    [book]
    authors = ["Raimi"]
    language = "en"
    multilingual = false
    src = "src"
    title = "your-book"

    [output.html]
    site-url = "/books/your-book/"
    mathjax-support = true
    # Required for preprocess.last-changed
    git-repository-url = "https://github.com/remykarem/remkarem.github.io"
    additional-css = ["last-changed.css"]

    [build]
    build-dir = "../../your-book"

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
