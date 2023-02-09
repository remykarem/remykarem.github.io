# PKCS #8

Standards that define extra padding etc of private key

- PKCS#8; common format for RSA; req by java

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

