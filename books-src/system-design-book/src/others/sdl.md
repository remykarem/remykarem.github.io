# GraphQL schema

aka Schema Definition Language, used in GraphQL

Example schema:

```graphql
# Define a "Book" type
type Book {
  id: ID!
  title: String!
  author: String!
}

# Root Query type
type Query {
  books: [Book!]!      # Returns a list of books
  book(id: ID!): Book  # Returns a single book by ID
}
```

Example query:

```graphql
# Fetch all books (id, title, author)
query {
  books {
    id
    title
    author
  }
}
```

Example result:

```json
{
  "data": {
    "books": [
      { "id": "1", "title": "1984", "author": "George Orwell" },
      { "id": "2", "title": "Brave New World", "author": "Aldous Huxley" }
    ]
  }
}
```
