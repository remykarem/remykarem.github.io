# README for books

Install mdbook and mdbook-toc

```
cargo install mdbook mdbook-toc
```

## Creating a new book

1. Go into `books/src`.

2. Create a folder `your-book` and `cd` into it.

3. Run `mdbook init`.

4. Update the `book.toml` file with:

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

    [build]
    build-dir = "../../your-book"

    [preprocessor.toc]
    command = "mdbook-toc"
    renderer = ["html"]
    ```
