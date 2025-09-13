# Sparse indexing / partial indexing

Very common pattern in DynamoDB

~~~admonish success title="Postgres"
Postgres supports partial indexing.

It's not common in Postgres because sparsity is pushed into schema design (by normalisation).
~~~

Reads:
* [Handling Growth with Postgres: 5 Tips From Instagram](https://instagram-engineering.com/handling-growth-with-postgres-5-tips-from-instagram-d5d7e7ffdfcb)
