# SDL

Schema Definition Language, used in GraphQL

Example:

```
schema {
  query: Query
}

type Author {
  authorName: String
  Books: [Book]
}

type Book {
  bookName: String
  Authors: [Author]
}

type Query {
  getAuthor(authorName: String): Author
  getBook(bookName: String): Book
}
```

Source: https://docs.aws.amazon.com/appsync/latest/devguide/designing-your-schema.html
