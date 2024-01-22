# SLIFT

Secure Lightweight Information & File Transfer; by PrivyLink

Possible encryption method is hybrid (like OpenPGP) — encrypt data using asymmetric key (KEK), then encrypt the KEK using the RSA private key (CEK)

"Our TrustField Platform SDK uses NIST FIPS certified crypto algorithm, namely, 1024-bit RSA and 192-bit 3DES-CBC digital envelope to encrypt any specified file and transfer it to the destination server over a TCP/IP channel."

Features:
* Encrypted data uses PKCS#7 format
* Encrypted data includes the certificates of recipients
* Signing the message (by the sender)

Note the following:
* Closed-source (?)
* Commercial
* Available in Windows only
* SDK available in Java (and C++) only; SDK for v1.1 compiled to Java 5 (EOL Nov 2009)
* Advertised symmetric algorithm (3DES, DES) are obsolete.
* Documentation looks obsolete
* Newer generation cryptography (ECC) not advertised

Resources:
* [SLIFT-Ez](https://privylink.com/products/sliftez.htm)
* [PrivyLink SLIFT](https://privylink.com/products/slift.htm)
* [PrivyLink Resources](https://www.privylink.com/resources/whitepapers.htm)
* [PrivyLink in NIST Cryptographic Algorithm Validation Program](https://csrc.nist.gov/projects/cryptographic-algorithm-validation-program/validation-search?searchmode=validation&producttype=-1&ipp=250&orderBy=ValidationDate)
