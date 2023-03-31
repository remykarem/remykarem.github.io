# Decompile

Kotlin compiled for JVM target can be decompiled.

* Use IntelliJ's decompiler
* `javap` — this is part of the JDK

    ```
    kotlinc Hello.kt
    ```

    and

    ```
    javap -c -p io.github.remykarem.Hello
    ```

* `jad`

```admonish note
Use `jar xf hello.jar` to extract JARs
```
