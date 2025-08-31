# Factory method

A special function or method that creates instances.

~~~admonish example title="Spring Boot"
`@Bean`-annotated methods (in `@Configuration` classes) are factory methods for Spring beans.
~~~

~~~admonish example title="Rust"
Idiomatic in Rust.

```rust
use std::net::IpAddr;
use std::str::FromStr;

fn main() {
    let localhost = IpAddr::from_str("127.0.0.1").unwrap();
    println!("localhost IP is {:?}", localhost);
}
```
~~~

~~~admonish example title="Python"

```python
import numpy as np
X = np.array([1,2,3])
```
~~~

~~~admonish example title="Kotlin"

Use companion object

```kotlin
class SomeClass { 
  companion object { 
    fun someFn(): SomeClass {
      return SomeClass()
    }
  } 
}
```
~~~
