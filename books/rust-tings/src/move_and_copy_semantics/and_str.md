# &str

Shared references (&T) are also Copy (see [here](https://medium.com/r/?url=https%3A%2F%2Fdoc.rust-lang.org%2Fstd%2Fmarker%2Ftrait.Copy.html%23when-can-my-type-be-copy)). Here is an example of a commonly used type, the string slice `&str`.

### ✅ Listing 8–1

We can pass `name` to `do_something` in Lines 3 and 4. Note that we are *copying* the reference.

```rust,editable
fn main() {
    let name: &'static str = "Rust";
    do_something(name);
    do_something(name);
}

fn do_something(name: &str) {
    println!("Hello, {}!", name);
}
```


### ✅ ⚠️ Listing 8–2

Similar to Listing 2–4, calling `.clone()` just before passing name to do_something is redundant.

```rust,editable
fn main() {
    let name: &'static str = "Rust";
    do_something(name.clone());
    do_something(name.clone());
}

fn do_something(name: &str) {
    println!("Hello, {}!", name);
}
```

### ✅ ⚠️ Listing 8–3

Suggested by clippy, the `<&str>::clone(&name)` idiom clones the reference. The program compiles, but I'm not sure if this is idiomatic.

```rust,editable
fn main() {
    let name: &'static str = "Rust";
    do_something(<&str>::clone(&name));
    do_something(<&str>::clone(&name));
}

fn do_something(name: &str) {
    println!("Hello, {}!", name);
}
```
