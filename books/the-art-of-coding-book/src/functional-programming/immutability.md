# Immutability

~~~admonish example title="Rust"
Immutability is a fundamental part of Rust's language design. 

By default, all declared variables in Rust are immutable.

```rust
let x = 5;
x = 6;  // compile-time error
```
~~~

~~~admonish failure title="JavaScript"
Immutability does not apply to all objects.

While this will fail:

```js
const x = 1;
x = 2;
```

this won't:

```js
const person = {"name": "raimi"};
person["name"] = "adam";
```
~~~

~~~admonish note title="Immutability and shadowing"
While Rust allows _name shadowing_, the value that it holds is _still_ immutable.
```rust
let x = 1;
let x = 2;
```
~~~