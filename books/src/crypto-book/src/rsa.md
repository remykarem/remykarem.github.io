# RSA

Rivest-Shamir-Adleman; 1995

Keywords: modular exponentiation, prime factorisation, co-prime, greatest common divisor, prime numbers

```
(plaintext, public_key) -> ciphertext

(ciphertext, private_key) -> plaintext
```

RSA is an algorithm that generates public-private keys. You need to specify the length of the modulus \\( n \\): one of 1024, 2048, 3072, 4096, 8129, 16,384 bits.

For PKCS1 v1.5, the message to encrypt should be **no longer than the public modulus minus 11 bytes**. [http://golang.org/pkg/crypto/rsa/#EncryptPKCS1v15](http://golang.org/pkg/crypto/rsa/#EncryptPKCS1v15).

Find three large integers \\(d\\), \\(e\\) and \\( n \\) such that

$$
m^ed = m (\bmod n) \forall m \in [0,n)
$$

- **secret exponent**: \\(d \\), where "d" possibly means "(the ability to) decrypt"
- public key exponent: \\(e \\), commonly chosen as 65,537
- public modulus: \\( n \\)
- message: \\(m \\)
- cipher: \\(c \\)

## Generate key pair

In a cryptosystem you can generate the public and private keys. Here's how to generate them for RSA:

1. Choose 2 *large prime numbers* such that their product is of the required bit length. For didactic purposes we use small numbers:
    
    $$ p=3, q=11 $$
    
2. Compute \\( n \\) and \\( \phi \\).
    
    $$
    n = pq = 33
    $$
    
    $$
    \phi= (p-1)(q-1)=20
    $$

    > 💡 The \\( \phi \\) has something to do with [Euler's totient function](https://en.wikipedia.org/wiki/Euler%27s_totient_function), something we'll need for a theorem in the next step.
    
3. Choose \\(e \\) such that
    * \\(1 < e < \phi \\)
    * \\( e \\) and \\( \phi \\) are co-prime. For example, 14 and 21 are not coprime because gcd(14, 21) ≠ 1.
    
    In practice, this number is usually chosen to be 65,537. But for didactic purposes, we'll choose:

    $$
    e = 7
    $$
    

4. **Solve** \\(d \\) such that
    1. \\(1 < d < \phi \\)
    2. \\((d \times e) \bmod \phi =1 \\)
        
        > 💡 This is where the magic happens! See [Number theory](https://www.notion.so/Number-theory-3c7b334d25b74651b224c4998d3697f9).
        
    
Your **public key** is: (\\(e \\), \\( n \\))

Your **private key** is: (\\(d \\), \\( n \\))
    
## Encrypt

Compute cipher, \\( c \\), of plaintext message \\( m \\):
    
$$
m^e \bmod n
$$

In the example, \\( c \\) is 29.

## Decrypt
    
Compute plaintext message \\( m \\) of cipher \\( c \\):
    
$$
c^d \bmod n
$$

Recall that \\(c \\) is defined as \\( m^e \bmod n \\) so we substitute:

$$
(m^e \bmod n)^d \bmod n
$$
