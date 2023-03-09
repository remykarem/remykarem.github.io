# Persistence


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

## Test

`@Transactional` for code and tests.

`@DatabaseSetups` for clean inserts, fixtures etc.
