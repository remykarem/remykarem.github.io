# SHA

Hash function | Digest size   | Names | Remarks
--------------|----------|----------|---
SHA-1         | 160 bits | SHA-1 | ⚠️ broken
SHA-2 family  | 224/256/384/512 bits | SHA-224, SHA-256, SHA-384, SHA-512
SHA-3 family ("Keccak")  | 224/256/384/512 bits | SHA3-224, SHA3-256, SHA3-384, SHA3-512

~~~admonish example
```sh
cat -n "hello" | shasum -a 256
```
~~~
