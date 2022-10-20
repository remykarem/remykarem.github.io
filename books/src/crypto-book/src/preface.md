# Preface

[https://cryptobook.nakov.com](https://cryptobook.nakov.com/)

[https://connect2id.com/products/nimbus-jose-jwt/examples](https://connect2id.com/products/nimbus-jose-jwt/examples)

https://developers.google.com/tink/deterministic-encryption

# Goals

"item" = document, message, password

Authenticity — proof that item comes from a known source

Integrity — proof that a item is not altered

Confidentiality/Privacy — no one can read the item

Non-repudiation — signer cannot deny that they signed

Resistant to attacks — item cannot be easily guessed

---

PEM is an encoding

PKCS* is a format/structured container

pkcs1

- MIIEo… MIIEp…
- old format
- openssl genrsa
- 
- openssl asn1parse -in key.pem
returns a seq of 9 integers
- 

pkcs8

- MIIEv…
- modern format
- openssl genpkey -algorithm rsa (-pkeyopt rsa_keygen_bits:2048)
- openssl pkcs8 -topk8 -in private_key.pem -out private_key.p8 (-nocrypt)
- openssl asn1parse -in key.pem
- 

pkcs8 pub

- MIIB…
- modern format
- openssl rsa -in file -pubout
- openssl asn1parse -in key.pem

csr

- openssl req -newkey rsa:2048 -nodes -keyout domain.key -out domain.csr
