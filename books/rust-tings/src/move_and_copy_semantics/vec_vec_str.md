# Mutable borrow

## Nested mutable borrow

Based on [StackOverflow post](https://stackoverflow.com/questions/72794937/how-to-push-additional-element-to-vecvecstring/72795527#72795527).

How to do mutable borrow for a vector of a vector?

Not okay:

```rust,editable,should_panic
fn mutate(vec: &Vec<&mut Vec<&str>>) {
    vec.iter_mut().for_each(|inner_vec| {
        inner_vec.push("something");
    });

    println!("{:?}", vec);
}

fn main() {
    let mut vec1 = vec!["a1", "b2", "c3"];
    let mut vec2 = vec!["d1", "e2", "f3"];
    let mut vec3 = vec!["g1", "h2", "i3"];

    let mut vec: Vec<&Vec<&str>> = vec![&mut vec1, &mut vec2, &mut vec3];

    mutate(&mut vec);
}
```

Okay:

We need a `&mut Vec<&mut Vec<&str>>` type.

```rust,editable
fn mutate(vec: &mut Vec<&mut Vec<&str>>) {
    vec.iter_mut().for_each(|inner_vec| {
        inner_vec.push("something");
    });

    println!("{:?}", vec);
}

fn main() {
    let mut vec1 = vec!["a1", "b2", "c3"];
    let mut vec2 = vec!["d1", "e2", "f3"];
    let mut vec3 = vec!["g1", "h2", "i3"];

    let mut vec: Vec<&mut Vec<&str>> = vec![
        &mut vec1,
        &mut vec2,
        &mut vec3,
    ];

    mutate(&mut vec);
}
```
