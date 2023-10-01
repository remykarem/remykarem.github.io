# Optionals

## Optional binding

Find out if an optional contains a value, and if so, make that value available
Binding the value to the constant
Common to name the constant same as the optional. Only exists in the scope
Can comma-separate bindings

<aside>
💡 Similar to safe calls `?.` in Kotlin.

</aside>

Use `if let`:

```swift
if let catAge = catAge {
    print("The cat is \(catAge) years old")
} else {
    print("Cat is ageless. Beware.")
}
```

Instead of

```swift
if let catAge = catAge {
    if catAge != 0 {
        print("The cat is \(catAge) years old")
    } else {
        print("Cat is ageless. Beware.")
    }
} else {
    print("Cat is ageless. Beware.")
}
```

we can combine

```swift
if let catAge = catAge, catAge != 0 {
    print("The cat is \(catAge) years old")
} else {
    print("Cat is ageless. Beware.")
}
```

## Guard statement

This uses `guard let`, similar to `if let` but only used in functions

```swift
func printCatInfo(catName: String?, catAge: Int?) {
    guard let catName = catName, let catAge = catAge else {
        print("No cat or name")
        return
    }
    print("The cat is \(catName) and is \(catAge)")
}
printCatInfo(catName: "Ozma", catAge: 7)
printCatInfo(catName: nil, catAge: 7)
```
