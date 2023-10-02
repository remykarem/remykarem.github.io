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

~~~admonish hint title="Computed property vs. function"
This

```swift
struct Person {
    let name: String

    var greeting: String {
        "Good morning, I am \(name)"
    }
}
```

is probably more readable than

```swift
struct Person {
    let name: String

    func getGreeting() -> String {
        "Good morning, I am \(name)"
    }
}
```

except that the called might not be aware that the property is computed. 
~~~
