# Struct with u8 field

As mentioned previously, a type can implement `Copy` if all of its components implement `Copy`.

In these listings, we are concerned with the `Book` struct which consists of one `u8` field which implements the `Copy` trait. As a result, `Movie` *can* implement `Copy`.

### ✅ Listing 4-1

In this listing, everything looks normal, right?

```rust,editable,should_panic
#[derive(Debug)]
struct Book {
    id: u8,
}

fn main() {
    let book = Book { id: 1 };
    do_something(book);
}

fn do_something(book: Book) {
    println!("Book: {:?}!", book);
}
```

### ❌ Listing 4-2

Until we add a `println!` statement below `do_something`. What happened?

Because `book` doesn't implement the `Copy` trait (or hasn't implemented it yet), Rust *moves* `book` into `do_something`. But... because `book` is moved, `println!` cannot use this value anymore.

```rust,editable,should_panic
#[derive(Debug)]
struct Book {
    id: u8,
}

fn main() {
    let book = Book { id: 1 };
    do_something(book);
    println!("Book: {:?}", book);
}

fn do_something(book: Book) {
    println!("Book: {:?}!", book);
}
```

What can we do?

### ❌ Listing 4-3

One way is to implement the `Copy` trait for Book by deriving `Copy`.

But… we're still getting an error - the trait bound `Book: Clone` is not satisfied.

```rust,editable,should_panic
#[derive(Debug, Copy)]
struct Book {
    id: u8,
}

fn main() {
    let book = Book { id: 1 };
    do_something(book);
    println!("Book: {:?}", book);
}

fn do_something(book: Book) {
    println!("Book: {:?}!", book);
}
```

### ✅ Listing 4-4

If we head over to the [docs](https://medium.com/r/?url=https%3A%2F%2Fdoc.rust-lang.org%2Fstd%2Fmarker%2Ftrait.Copy.html%23whats-the-difference-between-copy-and-clone), it says that everything which is `Copy` must also implement `Clone` because `Clone` is a supertrait.

So let's implement the `Clone` trait for `Book` on top of the existing `Copy` trait.

```rust,editable,should_panic
#[derive(Debug, Copy, Clone)]
struct Book {
    id: u8,
}

fn main() {
    let book = Book { id: 1 };
    do_something(book);
    println!("Book: {:?}", book);
}

fn do_something(book: Book) {
    println!("Book: {:?}!", book);
}
```

### ✅ Listing 4-5

Sweet! We can also redesign our program such that `do_something` borrows `book` instead.

```rust,editable
#[derive(Debug)]
struct Book {
    id: u8,
}

fn main() {
    let book = Book { id: 1 };
    do_something(&book);
    println!("Book: {:?}", book);
}

fn do_something(book: &Book) {
    println!("Book: {:?}!", book);
}
```
