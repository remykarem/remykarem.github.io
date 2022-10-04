# Persistence


`@Entity`

`@EntityListeners`

`@Table(name = "my_beautiful_table")`


```kotlin
@Repository
interface SomeRepository : JpaRepository<MyEntity, Long> {
	fun findBy...(bla: String): MyEntity?
}

```
