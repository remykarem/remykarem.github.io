# Encryption schemes

Ciphertext offers confidentiality and authenticity.


* RSAES-OAEP

    ```bash
    openssl pkeyutl -encrypt -pkeyopt rsa_padding_mode:oaep -pkeyopt rsa_oaep_md:sha256 -pkeyopt rsa_mgf1_md:sha256 -inkey secret.pem -in plaintext.txt | base64 > encrypted2.txt
    ```

* RSAES-PKCS #1 v1.5

    ```bash
    openssl pkeyutl -encrypt -inkey secret.pem -in plaintext.txt | base64 > encrypted2.txt
    ```

See the `openssl-pkeyutl` docs (OpenSSL 3.0) [here](https://www.openssl.org/docs/man3.0/man1/openssl-pkeyutl.html). Note that `rsautl` is deprecated.


## Block ciphers

```bash
openssl enc -aes-256-cbc -in hello.txt > hello.txt.enc
```

```bash
openssl enc -aes-256-cbc -d -in hello.txt.enc > hello.txt
```
