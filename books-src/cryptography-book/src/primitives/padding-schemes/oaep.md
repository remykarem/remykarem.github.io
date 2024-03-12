# OAEP

PKCS1 v2, RFC 2437

Optimal Asymmetric Encryption Padding

OAEP involves hashing:

1. Hashing the OAEP label (metadata; often not used), is appended to the original message
2. [MGF](./mask-generation-functions/index.md)
