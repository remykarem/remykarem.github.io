# Utils

Check if two are the same

cert:

```
openssl x509 -modulus -noout -in cert.cer | openssl md5
```

- Encrypt or decrypt
    
    ```bash
    openssl pkeyutl -encrypt -in <input_file> -inkey <key.pem> -out <output_file>
    ```
    
    ```bash
    openssl pkeyutl -decrypt -in <input_file> -inkey <key.pem> -out <output_file>
    ```
    
Other useful tools:
* `base64`
* `basenc`
