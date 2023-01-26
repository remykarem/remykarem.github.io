# RSA

Rivest-Shamir-Adleman; 1995

Keywords: modular exponentiation, prime factorisation, co-prime, greatest common divisor, prime numbers

RSA is an algorithm that generates public-private keys. You need to specify the length of the modulus \\( n \\): one of 1024, 2048, 3072, 4096, 8129, 16,384 bits. NIST recommends 2048 [here](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57Pt3r1.pdf).

For PKCS1 v1.5, the message to encrypt should be **no longer than the public modulus minus 11 bytes**. [http://golang.org/pkg/crypto/rsa/#EncryptPKCS1v15](http://golang.org/pkg/crypto/rsa/#EncryptPKCS1v15).

- secret exponent: \\(d \\)
- key exponent: \\(e \\)
- modulus: \\( n \\)
- message: \\(m \\)
- cipher: \\(c \\)

## How it works

A message \\(m \\) is encrypted by taking the modular exponentation \\(e \\) to get the cipher \\(c \\). 

$$
c = m^e \bmod n
$$

The process is reversed using modular inverse (\\(d \\)).

$$
m = c^d \bmod n
$$

This means that \\(e \\) and \\(d \\) should be related like so:

$$
ed = 1 \bmod \phi(n)
$$

## Generate key pair

1. Choose 2 *large prime numbers* such that their product is of the required bit length. For didactic purposes we use small numbers:
    
    $$ p=3, q=11 $$
    
2. Compute \\( n \\) and \\( \phi(n) \\).
    
    $$
    n = pq = 33
    $$
    
    $$
    \phi(n) = (p-1)(q-1)=20
    $$

    > 💡 Note that to get back \\( p \\) and \\( q \\) from \\( n \\) is called prime factorisation and is a hard problem. If you solve it, you're in.

    > 💡 \\( \phi(n) \\) is called [Euler's totient function](https://en.wikipedia.org/wiki/Euler%27s_totient_function). This function is chosen because it's hard to calculate without knowing \\( p \\) and \\( q \\).

    > 💡 \\( \phi(n) \\) is the "internal secret."
    
3. Choose \\(e \\) to be used for modular exponentation such that:
    * \\(1 < e < \phi(n) \\)
        > 💡 Why? SO post [here](https://crypto.stackexchange.com/questions/87018/rsa-algorithm-must-e-be-less-than-varphin).

    * \\( e \\) and \\( \phi(n) \\) are co-prime. 
    
        > 💡 If they are not co-prime, it becomes impossible to decrypt uniquely (see SO post [here](https://crypto.stackexchange.com/questions/12255/in-rsa-why-is-it-important-to-choose-e-so-that-it-is-coprime-to-%CF%86n)).

    If \\( e \\) and \\( \phi(n) \\) are not co-prime, then from Euler's theorem, \\( e \\) and \\( n \\) are not co-prime (?). If that is the case

    For didactic purposes, we'll choose:

    $$
    e = 7
    $$

    > 💡 In practice, this number is usually chosen to be 65,537, which is a prime number.
    

4. To reverse the encryption, we need \\( d \\) to perform the inverse of modulo, such that \\(ed \bmod \phi =1 \\).

    Solve \\(d \\) such that
    1. \\(1 < d < \phi \\)


Your **public key** is: (\\(e \\), \\( n \\))

Your **private key** is: (\\(d \\), \\( n \\))
    
## RSA in the wild

RSA is usually used with padding.
