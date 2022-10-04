# Converters

Can be used for properties and at endpoints

Everywhere else

```kotlin
@Component
class StringToSectorEnumConverter : Converter<String, Sector> {

    override fun convert(source: String): Sector {
        return Sector.getByValue(source) ?: throw InvalidArgumentException("$source is not a valid sector")
    }
}
```

For use with properties

```kotlin
@Component
@ConfigurationPropertiesBinding
class RSAPublicKeyConverter : Converter<String, RSAPublicKey> {
    override fun convert(from: String): RSAPublicKey {
        return getPublicKey(from)
    }
}
```
