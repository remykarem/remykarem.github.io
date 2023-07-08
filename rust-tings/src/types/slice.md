# Slice

```rust,editable
fn main() {
    let names = vec![
        String::from("John"),
        String::from("Jane"),
    ];
    do_something(&names);
}

fn do_something(names: &[String]) {
    let name: String = names[0];
}
```
