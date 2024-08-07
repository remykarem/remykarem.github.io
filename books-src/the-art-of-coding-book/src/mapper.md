# Mapper

```
interface ModelMapper<T, U> {
    fun from(from: T): U
}
```

* Rust has `From<T>` and conversely `Into<U>`.
