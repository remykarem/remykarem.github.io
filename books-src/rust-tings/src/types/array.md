# Array

We know this

```rust,editable
fn main() {
    let ages: [i32; 2] = [25, 26];
    do_something(ages);
}

fn do_something(ages: [i32; 2]) {
    println!("Ages: {:?}", ages);
}
```

and we know it's copy on move because we can still call `println!` with `ages`.

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

but can we have an array of elements whose size can grow during runtime?

```rust,editable
fn main() {
    let ages: [String; 2] = ["25".to_string(), "26".to_string()];
    do_something(ages);
}

fn do_something(ages: [String; 2]) {
    println!("Ages: {:?}", ages);
}
```

We can??? 😱

Let's see if... the array was moved or copied.

```rust,editable
fn main() {
    let ages: [String; 2] = ["25".to_string(), "26".to_string()];
    do_something(ages);
    println!("{:?}", ages);
}

fn do_something(ages: [String; 2]) {
    println!("Ages: {:?}", ages);
}
```

It was moved! Phew...
