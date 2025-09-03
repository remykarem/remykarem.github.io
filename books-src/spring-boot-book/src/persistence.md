# Persistence

Spring Boot provides page-based pagination out of the boxxx


`@Entity`

`@EntityListeners`

`@Table(name = "my_beautiful_table")`

`@Transactional`

```kotlin
@Repository
interface SomeRepository : JpaRepository<MyEntity, Long> {
	fun findBy...(bla: String): MyEntity?
}

```

findBy_ might throw if return more than 1; will return null if empty

## Connection, session

A Hibernate session (or anything that implements JPA EntityManager) is responsible for 
* tracking entities
* lazily loading associations when you access them
* flushing changes to the DB

~~~admonish warning title="Gotcha: Proxy leak"
accessing a lazy proxy after session is closed

This happens if the access happens outside an `@Transaction`

```txt
could not initialize proxy
```
~~~

## Test

`@Transactional` for code and tests.

`@DatabaseSetups` for clean inserts, fixtures etc.
