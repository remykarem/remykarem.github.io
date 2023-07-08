# Builder

~~~admonish example title="Rust"
Very common in Rust's standard library.

```rust
use std::process::Command;

let output = Command::new("sh")
    .arg("-c")
    .arg("echo hello")
    .output()
    .expect("Failed to execute command");
```
~~~

~~~admonish example title="Java"
Very common in Java.

```java
BankAccount newAccount = new BankAccount
  .BankAccountBuilder("Jon", "22738022275")
  .withEmail("jon@example.com")
  .wantNewsletter(true)
  .build();
```

```java
public static class BankAccountBuilder {
    
    private String name;
    private String accountNumber;
    private String email;
    private boolean newsletter;
    
    public BankAccountBuilder(String name, String accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    public BankAccountBuilder withEmail(String email) {
        this.email = email;
        return this;
    }

    public BankAccountBuilder wantNewsletter(boolean newsletter) {
        this.newsletter = newsletter;
        return this;
    }
    
    public BankAccount build() {
        return new BankAccount(this);
    }
}
```
~~~