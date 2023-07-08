# Vec\<String>

Like `String`, [Vec](https://doc.rust-lang.org/std/vec/struct.Vec.html#)'s are moved, because they don't implement the `Copy` trait ([see here](https://doc.rust-lang.org/std/vec/struct.Vec.html#trait-implementations)). The same move semantics apply.

Vectors (and other collections for that matter) are worth talking about because there are so many semantics involved - the container itself, the elements, and the iterators.

We use `Vec` as an example here because it's a very common data structure for collections. Other collections that also don't implement the `Copy` trait include `HashMap` and `HashSet`. Move semantics for arrays, on the other hand, work similarly as structs in that they depend on the type of the item - but that's for another day.

* [Container](#container)
* [Items](#items)

## Container

### ✅ Listing 6-1

As always, we'll start with something happy:

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    do_something(names);
}

fn do_something(names: Vec<String>) {
    println!("{:?}", names);
}
```

### ❌ Listing 6-2

Until we add a `println!` statement after `do_something`.

We've seen this compiler error before for the `String` type where we try to borrow/use a value after it has been moved.

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    do_something(names);
    println!("{:?}", names);
}

fn do_something(names: Vec<String>) {
    println!("{:?}", names);
}
```

What can we do?

### ✅ Listing 6-3

We can borrow `names` first, so that we can move it into `do_something` afterwards.

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    println!("{:?}", names);
    do_something(names);
}

fn do_something(names: Vec<String>) {
    println!("{:?}", names);
}
```

### ✅ Listing 6-4

We can redesign `do_something` to borrow `names`so that we can borrow it again at `println!`.

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    do_something(&names);
    println!("{:?}", names);
}

fn do_something(names: &[String]) {
    println!("{:?}", names);
}
```

### ✅ Listing 6-5

Lastly, we can clone the vector for `do_something`. Note that vector clones are shallow copies.

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    do_something(names.clone());
    println!("{:?}", names);
}

fn do_something(names: Vec<String>) {
    println!("{:?}", names);
}
```

## Items

Reading elements in a vector via getting the index is tricky. It's just not the same in the programming languages that we know.

### ❌ Listing 6-6

I mean would you take a look at this! The code below is perfectly fine in the programming languages that I know but here, we get a compiler error saying I cannot move out of index of `Vec<String>`.

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    let name: String = names[0];
    println!("Hello, {}", name);
}
```

But why?

See, if you move only one element out of a `Vec`, you leave the vector in an **invalid state** - the vector is not a collection of homogenous elements anymore

Implicitly moving out of a `Vec` is not allowed as it would **leave the vector in an invalid state** - one element is moved out, the others are not (see [this](https://stackoverflow.com/questions/27904864/what-does-cannot-move-out-of-index-of-mean) StackOverflow post). If I were to iterate this vector, I might access an invalid memory (the element that was moved out) 😱. Thanks for protecting us, Rust.

So what do we do?

### ✅ Listing 6-7

We can *borrow* the value that we want by using the indexing operator.

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    let name: &str = &names[0];
    println!("Hello, {}", name);
}
```

### ✅ Listing 6-8

We can also *borrow* the value using the `.get` method.

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    let name: &str = names.get(0).unwrap();
    println!("Hello, {}", name);
}
```

### ✅ Listing 6-9

We can also *borrow* the value using the `.first()` or `.last()` method (if you want the first and last item, of course).

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    let name: &str = names.first().unwrap();
    println!("Hello, {}", name);
}
```

But... what if I want to *own* an element?

### ✅ Listing 6-10

We use the `.into_iter()` method to own the individual elements. More on iterators in the next chapter.

```rust,editable
fn main() {
    let names = vec![String::from("John"), String::from("Jane")];
    let mut names_iter = names.into_iter();
    let name: String = names_iter.next().unwrap();
    println!("Hello, {}", name);
}
```

This example works if you want to own the first element. Afaik, if you want to own the element at index *n* (for some reason), you would call `.skip(n)` then call `.next()`.

### ✅ Listing 6-11

For `Vec`, we can `.pop()` the last element and own the data.

```rust,editable
fn main() {
    let mut names = vec![String::from("John"), String::from("Jane")];
    let name: String = names.pop().unwrap();
    println!("Hello, {}", name);
}
```
