# Block ciphers

A **deterministic** encryption algorithm operating on a _block_. It offers [confidentiality](../../goals/confidentiality.md).

```admonish note title="Definition"
A **block** is a fixed-length group of bits.
```

The algorithm should be able to perform both operations:

$$
\text{(message, \textbf{key})} \rightarrow \text{ciphertext}
$$

$$
\text{(ciphertext, \textbf{key})} \rightarrow \text{message}
$$

~~~admonish tip title="In practice: Encrypting arbitrary data"
In practice, the data to encrypt is not a fixed length.

Therefore, a block cipher is used together with a [**mode of operation**](../block-cipher-mode-of-operation.md) to encrypt data of arbitrary length.
~~~

~~~admonish example title="How to see a block cipher in action?"
To see a block cipher in its "raw" form, we can use the **ECB** mode.

Using AES as the block cipher with a key of length 128 bits (i.e. `aes-128-`), where the key is `0123456789abcdef`, represented as a hexadecimal string `30313233343536373839616263646566`, we encrypt a block of 128 bits of data (`hellothereworld?`):

```sh
echo -n "hellothereworld?" |
openssl enc -aes-128-ecb -K 30313233343536373839616263646566 -nopad |
xxd -p
```

This should always return `6fd49017d30fc21b6a0f105a141382cf`.
~~~

~~~admonish tip title="In practice: Automatic key generation via KDF"
In practice, the key is generated via [KDF](../../kdf/index.md) based on the user's password input.

This is probably because we cannot always expect the user to give us a fixed-size key.

In OpenSSL, sometimes you might get the warning

```
*** WARNING : deprecated key derivation used.
```

which indicates that the password input you are providing is being used for KDF. However, the KDF used is a [PBKDF1](../../kdf/pbkdf1.md) which is no longer recommended.
~~~

~~~admonish tip title="In practice: Automatic padding"
In practice, the data to encrypt is automatically padded by the library.

This is because the block ciphers work with fixed-length bits.

For example, OpenSSL uses the [PKCS #7](../../padding-schemes/pkcs7-padding.md) padding. See [here](https://www.openssl.org/docs/man1.1.1/man3/EVP_CIPHER_CTX_set_padding.html).

If we specify the `-nopad` option to encrypt this data that doesn't conform to the block cipher's requirement of block size, we'll get an error:

```sh
echo -n "data" |
openssl enc -aes-128-ecb -K 30313233343536373839616263646566 -nopad
```

```txt
bad encrypt
401C38D801000000:error:1C80006B:Provider routines:ossl_cipher_generic_block_final:wrong final block length:providers/implementations/ciphers/ciphercommon.c:420:
```

If we remove the `-nopad` option, the padding will be automatically applied:

```sh
echo -n "data" |
openssl enc -aes-128-ecb -K 30313233343536373839616263646566 |
xxd -p
```

```txt
e1b8013ba633cabbfc57c829f723e104
```
~~~

~~~admonish note title="Algorithm names"
Algorithms are typically named as such:

```txt
<block-cipher>-<key-length>-<mode-of-operation>
```

like

```
AES-128-CBC
```
~~~

~~~admonish question title="What happens if the block doesn't meet the required length?"
* Turn the block cipher into a stream cipher using counter mode
* Pad
~~~
