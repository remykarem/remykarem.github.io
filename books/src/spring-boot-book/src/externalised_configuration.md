# Externalised configuration

```kotlin,noplayground
@ConstructorBinding
@ConfigurationProperties("some-profile")
data class CompanyProfileProperties(
    val name: String,
    val address: String,
    val age: Int,
)
```

and don’t forget

```kotlin,noplayground
@ConfigurationPropertiesScan
class MyApplication
```
