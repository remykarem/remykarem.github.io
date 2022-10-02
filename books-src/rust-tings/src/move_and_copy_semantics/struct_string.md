# Struct with String field

A type can implement `Copy` if all of its components implement `Copy` (see [When can my type be `Copy`?](https://doc.rust-lang.org/std/marker/trait.Copy.html#when-can-my-type-be-copy)).

In these listings, we are concerned with the `Movie` struct which consists of one `String` field which *doesn't* implement `Copy`. As a result, `Movie` *cannot* implement `Copy`.

### ✅ Listing 3-1

Looks good so far, doesn’t it? Program compiles (ignoring the unused field warning) and we’re all happy.

```rust,editable,should_panic
#[derive(Debug)]
struct Movie {
    title: String,
}

fn main() {
    let movie = Movie { 
        title: String::from("Rust")
    };
    do_something(movie);
}

fn do_something(movie: Movie) {
    println!("Movie: {:?}!", movie);
}
```

### ❌ Listing 3-2

But after adding `println!`, the compiler complains that we are trying to borrow a value `movie` that has already moved into `do_something`.

We've seen this kind of move semantics before for `String`'s in the earlier listings.

```rust,editable,should_panic
#[derive(Debug)]
struct Movie {
    title: String,
}

fn main() {
    let movie = Movie { 
        title: String::from("Rust")
    };
    do_something(movie);
    println!("Movie: {:?}", movie);
}

fn do_something(movie: Movie) {
    println!("Movie: {:?}!", movie);
}
```

What do we do?

### ✅ Listing 3-3

We can borrow `movie` instead of moving it.

```rust,editable
#[derive(Debug)]
struct Movie {
    title: String,
}

fn main() {
    let movie = Movie { 
        title: String::from("Rust")
    };
    do_something(&movie);
    println!("Movie: {:?}", movie);
}

fn do_something(movie: &Movie) {
    println!("Movie: {:?}!", movie);
}
```

### ✅ Listing 3-4

Or we can clone `movie` for `do_something`. This requires `Movie` to implement `Clone`.

```rust,editable
#[derive(Debug, Clone)]
struct Movie {
    title: String,
}

fn main() {
    let movie = Movie { 
        title: String::from("Rust")
    };
    do_something(movie.clone());
    println!("Movie: {:?}", movie);
}

fn do_something(movie: Movie) {
    println!("Movie: {:?}!", movie);
}
```

### ✅ Listing 3-5

Or we can just switch the code around a bit without cloning, if your program allows it. Here, borrowed `movie` for `println!`, then move `movie` into `do_something`.

```rust,editable
#[derive(Debug)]
struct Movie {
    title: String,
}

fn main() {
    let movie = Movie { 
        title: String::from("Rust")
    };
    println!("Movie: {:?}", movie);
    do_something(movie);
}

fn do_something(movie: Movie) {
    println!("Movie: {:?}!", movie);
}
```
