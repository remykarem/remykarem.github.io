# Externalised configuration

[Spring Boot's Reference on Externalized Configuration](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#features.external-config)

There are 2 ways to do this:

<!-- toc -->

---

## `@ConfigurationProperties` annotation

`application.yml`

```yml
some-profile:
    name: raimi
    address: 51 Greentree Road
    age: 25
```

```kotlin
@ConstructorBinding
@ConfigurationProperties("some-profile")
data class ProfileProperties(
    val name: String,
    val address: String,
    val age: Int,
)
```

and don’t forget

```kotlin
@ConfigurationPropertiesScan
class MyApplication
```

You can also model the container directly (?):

`application.yml`

```yml
my-hobbies:
    - swimming
    - netflix
```

```kotlin
@ConstructorBinding
@ConfigurationProperties("some-profile")
data class MyHobbyProperties(val myHobbies: List<String>)
```

## `@Value` annotation

`application.yml`

```yml
my-hobbies:
    - swimming
    - netflix
```

Example use:

```kotlin
@Service
class SomeService(
    @Value("\${my-hobbies}")
    private val hobbies: List<String>,
)
```
