# Array

## ✅ Listing 2-1

```rust,editable
fn main() {
    let ages: [i32; 2] = [25, 26];
    do_something(ages);
}

fn do_something(ages: [i32; 2]) {
    println!("Ages: {:?}", ages);
}
```

## ✅ Listing 2–2

```rust,editable
fn main() {
    let ages: [i32; 2] = [25, 26];
    do_something(ages);
    println!("{:?}", ages);
}

fn do_something(ages: [i32; 2]) {
    println!("Ages: {:?}", ages);
}
```

## ✅ Listing 2–3

We can also pass the value by reference, although it is not idiomatic.

```rust,editable
fn main() {
    let ages: [i32; 2] = [25, 26];
    do_something(&ages);
    println!("{:?}", ages);
}

fn do_something(ages: &[i32; 2]) {
    println!("Ages: {:?}", ages);
}
```

## ✅ ⚠️ Listing 2–4

In Line 3, we first cloned `ages` before passing it to `do_something`. The program compiles, but note that the copying will be done twice - one in `.clone()`, the other is the copying when `ages` goes into `do_something` scope.

Note that this idiom should be avoided. See Clippy lint on **clone_on_copy** [here](https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy).

Clippy will

```rust,editable
fn main() {
    let ages: [i32; 2] = [25, 26];
    do_something(ages.clone());
    println!("{:?}", ages);
}

fn do_something(ages: [i32; 2]) {
    println!("Ages: {:?}", ages);
}
```
