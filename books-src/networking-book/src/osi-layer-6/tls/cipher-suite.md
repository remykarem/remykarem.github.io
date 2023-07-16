# TLS cipher suite

A cipher suite specifies the methods and algorithms that a TLS client and server will use to securely communicate.

```
TLS_<1>_WITH_<2>_<3>_<4>
```

where

* `<1>` — Key exchange algorithm eg. `RSA`, `DHE`, `ECDHE`
* `<2>` — Authentication algorithm eg. `RSA`, `ECDSA`
* `<3>` — Encryption eg. `AES_128_GCM`
* `<4>` — MAC algorithm eg. `SHA256`

eg.

```
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
```

TLS 1.3 uses the following format (specifying only the symmetric cipher and hash function):

```
TLS_<3>_<4>
```

eg.

```
TLS_AES_128_GCM_SHA256
```