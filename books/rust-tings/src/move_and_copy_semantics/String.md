# String

A [`String`](https://doc.rust-lang.org/std/string/struct.String.html) is a type that does not implement the `Copy` trait.

### ✅ Listing 1-1

Let's create a `String` then call `do_something` with it.

Everything looks normal.

```rust,editable
fn main() {
    let name = String::from("Rust");
    do_something(name);
}

fn do_something(name: String) {
    println!("Hello, {}!", name);
}
```

### ❌ Listing 1-2

Let's add a `println!` statement in Line 4...

```rust,editable,should_panic
fn main() {
    let name = String::from("Rust");
    do_something(name);
    println!("{}", name);
}

fn do_something(name: String) {
    println!("Hello, {}!", name);
}
```

which is illegal! This is because we are trying to use (borrow, in the case of `println!`) the value `name` which has already been moved into `do_something` in Line 3.

You cannot use a value that has been moved. Before `name` can even reach `println!`, it was moved into `do_something` and went *out of scope* at the end of the function.

What can we do?

### ✅ Listing 1-3

What we could do is to clone name as `name_clone`, such that we use name for Line 5 and `name_clone` for Line 6. Note that there are costs to cloning.

```rust,editable,should_panic
fn main() {
    let name = String::from("Rust");
    let name_clone = name.clone();

    do_something(name);
    println!("{}", name_clone);
}

fn do_something(name: String) {
    println!("Hello, {}!", name);
}
```

### ✅ Listing 1-4

Or we could pass `name` to `do_something` by reference in Line 3, and still be able to use it for `println!` in Line 4.

```rust,editable,should_panic
fn main() {
    let name = String::from("Rust");
    do_something(&name);
    println!("{}", name);
}

fn do_something(name: &str) {
    println!("Hello, {}!", name);
}
```

### ✅ Listing 1-5

Or we could simply switch around the code a bit if your program allows it.

Here, we first borrow `name`, then later move it into `do_something`. This program compiles because after the `do_something` line, no one else in the `main` scope is going to use `name`.

```rust,editable,should_panic
fn main() {
    let name = String::from("Rust");
    println!("{}", name);
    do_something(name);
}

fn do_something(name: String) {
    println!("Hello, {}!", name);
}
```
