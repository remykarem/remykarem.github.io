# Protobuf

With a **proto definition**,

```protobuf
message Person {
  optional string name = 1;
  optional int32 id = 2;
  optional string email = 3;
}
```

you can generate classes (in various programming languages) and use them to serialise/deserialise ("encode"/"decode") data (eg. John Doe with email address jdoe@example.com):

```java
Person john = Person.newBuilder()
    .setId(1234)
    .setName("John Doe")
    .setEmail("jdoe@example.com")
    .build();
output = new FileOutputStream(args[0]);
john.writeTo(output);
```

into binary (not real):

```
08 96 01 7f
```

Examples adapted from https://protobuf.dev.
