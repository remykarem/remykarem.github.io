# Late-init property

You can initialise (non-null) properties after an object has been created.

A late-init property... the only time I see it used is in Spring Boot.

Because it will be initialised after the creation of an object, the property must be `var`.

Note that lateinit variables cannot be declared with primitive types or null type in Kotlin. See Baeldung's post [here](https://www.baeldung.com/kotlin/lateinit-primitive-types).

[https://stackoverflow.com/questions/36623177/kotlin-property-initialization-using-by-lazy-vs-lateinit](https://stackoverflow.com/questions/36623177/kotlin-property-initialization-using-by-lazy-vs-lateinit)
