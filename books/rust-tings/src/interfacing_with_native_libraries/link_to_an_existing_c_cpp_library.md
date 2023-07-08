# Link to an existing C/C++ library

To call external code, we need the keyword `extern` that will crreate and use FFI. FFIs are like bindings to the external library.

https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html#using-extern-functions-to-call-external-code

## C standard library

To call a function from the C standard library (eg.`abs`), simply:

```rust,editable
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    unsafe {
        println!("Absolute value of -3 according to C: {}", abs(-3));
    }
}
```

## User library

To call a function from a library `libawesome.a` or `libawesome.dylib` which is found in `/usr/local/lib`, `/usr/lib`, `/Library/Developer/CommandLineTools/SDKs/**/usr/lib`:

```rust,editable
#[link(name = "awesome")]
extern "C" {
    // function here
}

fn main() {
    unsafe {
        // functionl call
    }
}
```

More info about the `link` attribute https://doc.rust-lang.org/reference/items/external-blocks.html#the-link-attribute.

See the dynamic library paths that Cargo sets https://doc.rust-lang.org/cargo/reference/environment-variables.html#dynamic-library-paths.

## Custom library

To call a function from a library `libawesome.a` or `libawesome.dylib` which is found elsewhere, you need to create a build script:

`build.rs`

```rust,editable
fn main() {
    println!("cargo:rustc-link-search=/path/to/lib");
    println!("cargo:rustc-link-lib=awesome");
}
```

`src/main.rs`

```rust,editable
#[link(name = "awesome")]
extern "C" {
    // function here
}

fn main() {
    unsafe {
        // functionl call
    }
}
```

## Custom library + auto-generated FFI bindings from headers

Refer to [bindgen](https://rust-lang.github.io/rust-bindgen/).

## Appendix: Creating a static library

`hello.c`

```c
int square(int value) {
  return value * value;
}
```

Run:

```sh
gcc -c -o hello.o hello.c
ar rcs libhello.a hello.o
```

## References

https://doc.rust-lang.org/nomicon/ffi.html
