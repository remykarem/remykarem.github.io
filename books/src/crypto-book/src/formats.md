# Formats / encoding

Encoding

- Base64

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