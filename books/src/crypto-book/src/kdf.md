# KDF

Key-derivation functions

```
secret_value -> key
```

[https://blog.boot.dev/cryptography/key-derivation-functions/](https://blog.boot.dev/cryptography/key-derivation-functions/)

The algorithms use *key stretching* techniques that include:

- salt
- many iterations

```tsx
derivationFunction(password, salt, difficulty) -> key
```

Properties

- Key stretching
- Key separation — create child keys from a master key
- Key strengthening
- (Properties of hash)

Types of KDF

- Hash-based (most common)
    - Bcrypt
        
        ```
        $2a$07$wHirdrK4OLB0vk9r3fiseeYjQaCZ0bIeKY9qLsNep/I2nZAXbOb7m
        ```
        
    - Scrypt
        
        ```
        16384$8$1$kytG1MHY1KU=$afc338d494dc89be40e317788e3cd9166d066709db0e6481f0801bd918710f46
        ```
        
    - Argon
        
        ```
        $argon2d$v=19$m=1024,t=16,p=4$c2FsdDEyM3NhbHQxMjM$2dVtFVPCezhvjtyu2PaeXOeBR+RUZ6SqhtD/+QF4F1o
        ```
        
- Block cipher-based
