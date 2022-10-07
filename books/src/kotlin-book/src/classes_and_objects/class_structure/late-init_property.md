# Late-init property

You can initialise (non-null) properties after an object has been created.

A late-init property... the only time I see it used is in Spring Boot.

Because it will be initialised after the creation of an object, the property must be `var`.

[https://stackoverflow.com/questions/36623177/kotlin-property-initialization-using-by-lazy-vs-lateinit](https://stackoverflow.com/questions/36623177/kotlin-property-initialization-using-by-lazy-vs-lateinit)
