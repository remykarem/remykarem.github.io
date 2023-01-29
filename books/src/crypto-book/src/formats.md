# Formats / encoding

File

- PEM format is base64; `.pem`
    
    **PEM — Privacy-Enhanced Mail**
    
    format for storing and sending cryptographic keys. Base64
    
    `.pem`, `.key`, 
    
    ```
    ----BEGIN PRIVATE KEY----
    MIIJRAIBADANBgkqhkiG9w0BAQEFAASCCS4wggkqAgEAAoICAQD2GlhF9HuoPwiF
    S8lh0lHCwVGlVq0Jqtmp7ieyVOZ0mbU6T2KCDwkL3mWWSiVZc+cjh3EOsXtyzuiq
    -----END PRIVATE KEY-----
    ```
    
- Plaintext base64
- DER format is binary. Commonly used in java

Abstract

- ASN.1??

Standards that define extra padding etc of private key

- PKCS#8; common format for RSA; req by java

Standard format for public key certificates

- X.509
    - public key
    - Signature
    - Other info
        - Country name
        - Website
        
    
    Applications
    
    - sSL
    - Document signing
    
    new cert (new private key etc.)
    
    ```bash
    openssl req -newkey rsa:2048 -nodes -keyout domain.key -x509 -days 365 -out domain.crt
    ```
    
    new cert from existing private key

---


PEM is an encoding

PKCS* is a format/structured container

pkcs1

- MIIEo… MIIEp…
- old format
- openssl genrsa
- openssl asn1parse -in key.pem
returns a seq of 9 integers

pkcs8

- MIIEv…
- modern format
- openssl genpkey -algorithm rsa (-pkeyopt rsa_keygen_bits:2048)
- openssl pkcs8 -topk8 -in private_key.pem -out private_key.p8 (-nocrypt)
- openssl asn1parse -in key.pem

pkcs8 pub

- MIIB…
- modern format
- openssl rsa -in file -pubout
- openssl asn1parse -in key.pem
