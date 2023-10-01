# Read-only computed properties

Read-only computed properties are defined with `var`.

```swift
struct Person {
    let name: String
    var greeting: String {
        "Good morning, I am \(name)"
    }
}
```

which is shorthand for

```swift
struct Person {
    let name: String
    var greeting: String {
        get {
            "Good morning, I am \(name)"
        }
    }
}
```
