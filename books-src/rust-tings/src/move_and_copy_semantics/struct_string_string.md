# Struct with two String fields

Can values be moved *out of* struct? 🤔

In this section, we'll talk about *partial move*.

### ✅ Listing 5-1

Everything looks normal so far...

```rust,editable
#[derive(Debug)]
struct Person {
    name: String,
    alias: String,
}

fn main() {
    let person = Person { 
        name: "John".to_string(),
        alias: "Johan".to_string(),
    };
    print_alias(person.alias);
}

fn print_alias(alias: String) {
    println!("Person: {:?}!", alias);
}
```

### ❌ Listing 5-2

However, in this listing, we added a print statement right after `print_alias`.

The program didn't compile because `person.alias` has *partially moved* into `print_alias`, but we tried to borrow `person` as a whole in the `println!` line.

```rust,editable,should_panic
#[derive(Debug)]
struct Person {
    name: String,
    alias: String,
}

fn main() {
    let person = Person { 
        name: "John".to_string(),
        alias: "Johan".to_string(),
    };
    print_alias(person.alias);
    println!("{:?}", person);
}

fn print_alias(alias: String) {
    println!("Person: {:?}!", alias);
}
```

What can we do? What are the legal moves?

### ✅ Listing 5-3

It turns out that we *can* partially move fields - just make sure that we don't try to use the struct itself again later.

Here, we move the two fields into two different functions.

```rust,editable
#[derive(Debug)]
struct Person {
    name: String,
    alias: String,
}

fn main() {
    let person = Person { 
        name: "John".to_string(),
        alias: "Johan".to_string(),
    };
    print_alias(person.alias);
    print_name(person.name);
}

fn print_alias(alias: String) {
    println!("Alias: {:?}!", alias);
}

fn print_name(name: String) {
    println!("Name: {:?}!", name);
}
```

### ✅ Listing 5-4

We can pass these fields by reference.

```rust,editable
#[derive(Debug)]
struct Person {
    name: String,
    alias: String,
}

fn main() {
    let person = Person { 
        name: "John".to_string(),
        alias: "Johan".to_string(),
    };
    print_alias(&person.alias);
    print_name(&person.name);
}

fn print_alias(alias: &str) {
    println!("Alias: {:?}!", alias);
}

fn print_name(name: &str) {
    println!("Name: {:?}!", name);
}
```

### ✅ Listing 5-5

Or if we want to use `person` again later, we can clone these values.

```rust,editable
#[derive(Debug)]
struct Person {
    name: String,
    alias: String,
}

fn main() {
    let person = Person { 
        name: "John".to_string(),
        alias: "Johan".to_string(),
    };
    print_alias(person.alias.clone());
    print_name(person.name.clone());
    println!("{:?}", person);
}

fn print_alias(alias: String) {
    println!("Alias: {:?}!", alias);
}

fn print_name(name: String) {
    println!("Name: {:?}!", name);
}
```

### ✅ Listing 5-6

Or you can move things around without having to clone. Here we first borrowed `person`, then partially moved the fields.

```rust,editable
#[derive(Debug)]
struct Person {
    name: String,
    alias: String,
}

fn main() {
    let person = Person { 
        name: "John".to_string(),
        alias: "Johan".to_string(),
    };
    println!("{:?}", person);
    print_alias(person.alias);
    print_name(person.name);
}

fn print_alias(alias: String) {
    println!("Alias: {:?}!", alias);
}

fn print_name(name: String) {
    println!("Name: {:?}!", name);
}
```
