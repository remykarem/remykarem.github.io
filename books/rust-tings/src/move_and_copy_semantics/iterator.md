# Iterator

[Iterators](https://doc.rust-lang.org/std/iter/index.html) play an extremely important role when it comes to ownership of elements in a collection.

In these examples we will use `Vec<String>`, intentionally using `String` as the element (which does not implement the `Copy` trait) so that we can demonstrate its move semantics in a vector.

https://doc.rust-lang.org/nightly/std/iter/#for-loops-and-intoiterator

* [for-loop](#for-loop)
* [Functional programming](#functional-programming)
* [Iter::next](#functional-programming)

## for-loop

### ✅ Listing 7-1

Let's start with a for-loop iterating over `names`. Why for-loop? We'll get to that.

But for now, life's a bed of roses:

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];

    for name in names {
        println!("{}", name);
    }
}
```

### ❌ Listing 7-2

Until we add a print statement below the for-loop... where the compiler starts to complain.

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];

    for name in names {
        println!("{}", name);
    }

    println!("Names: {:?}", names);
}
```

Apparently there is an "implicit `.into_iter` call before the loop."

Wait, *implicit*? Why?! But okay, let's add that implicit `.into_iter`:


### ❌ Listing 7-3

After adding `into_iter()`, we expect that the program still does not compile.

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];

    for name in names.into_iter() {
        println!("{}", name);
    }

    println!("Names: {:?}", names);
}
```

### ❌ Listing 7-4

Hmmmmm let’s assign a variable to `names.into_iter()`. So that we can sort of visualise the move. Note that we still expect the program to not compile.

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];

    let names_iter = names.into_iter();

    for name in names_iter {
        println!("{}", name);
    }

    println!("Names: {:?}", names);
}
```

What's happening is that using `into_iter`, we are *moving* the elements from `names` into `names_iter`. As a result, we cannot use `names` anymore!

What do we do?

### ✅ Listing 7-5

We can borrow elements from `names` using `.iter()`:

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];

    for name in names.iter() {
        println!("{}", name);
    }

    println!("Names: {:?}", names);
}
```

### ✅ Listing 7-6

We can use a slice (which implements `IntoIterator`).

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];

    for name in &names {
        println!("{}", name);
    }

    println!("Names: {:?}", names);
}
```

### ✅ Listing 7-7

If your program allows it, we can switch the code around a bit to borrow `names` first, then move it:

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];

    println!("Names: {:?}", names);

    for name in names {
        println!("{}", name);
    }
}
```

### ✅ Listing 7-8

We can also clone the vector. Note that there are costs to cloning.

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];

    for name in names.clone() {
        println!("{}", name);
    }

    println!("Names: {:?}", names);
}
```

## Functional programming

Using functional programming idioms makes it more obvious that iterators are involved when you want to iterate over elements (especially if you come from programming languages where you don't have to deal with iterators directly).

Unlike for-loops, there are no implicit `.into_iter()` calls. As such, for vectors, we always need to call `.iter()`, `.into_iter()`, etc. to get an iterator.

### ❌ Listing 7-9

Here it doesn't compile because we need to iterate over the elements, meaning we need get an iterator using, say, `.iter()`.

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];
    
    names.for_each(|name| println!("{}", name));
    
    println!("{:?}", names);
}
```

### ✅ Listing 7-10

Here, we use a combination of `.iter()` and `.for_each()`.

The iterator returns a reference to the elements. We can still use the `names` object afterward:

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];
    
    names
        .iter()
        .for_each(|name| println!("{}", name));
    
    println!("{:?}", names);
}
```

### ❌ Listing 7-11

If you want to move the elements, use `.into_iter()`. However, note that we can't use the vector afterwards:

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];
    
    names
        .into_iter()
        .for_each(|name| println!("{}", name));
    
    println!("{:?}", names); 
}
```

### ✅ Listing 7-12

You'll need to redesign your program such that you don't use the moved elements. Here, we moved the print statement in front:

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];
    
    println!("{:?}", names); 

    names
        .into_iter()
        .for_each(|name| println!("{}", name));
}
```

### ✅ Listing 7-13

We could also clone the vector before calling `.into_iter()`.

```rust,editable
fn main() {
    let names = vec![String::from("John"),String::from("Jane")];

    names.clone()
        .into_iter()
        .for_each(|name| println!("{}", name));
    
    println!("{:?}", names); 
}
```


## Notes

**Do not be fooled when you see your IDE type hint `Iter<T>`.** For `Iter<T>`, you are iterating over `&T`, not `T`!
