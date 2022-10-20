# JWE

# JSON Object Signing and Encryption group (JOSE)

ff

```json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX
VCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiw
ibmFtZSI6IkpvaG4gRG9lIiwiaWF0Ijo
xNTE2MjM5MDIyfQ.GxPxNABvqFlMWu62
msEjBaDt7qLP8KrV8FeBDy8TpcM
```

Header (JWT, JWS)

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Payload (JWT, JWS)

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

Signature (JWS)

```json
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  1123234r324r234r2394834
)
```

> 💡 HMACSHA256 because of the HS256 alg in the header. 112323... is the shared secret


---

Token

```json
eyJhbGciOiJSU0ExXzUiLCJlbmMiOiJB
MTI4Q0JDLUhTMjU2In0.UGhIOguC7IuE
vf_NPVaXsGMoLOmwvc1GyqlIKOK1nN94
nHPoltGRhWhw7Zx0-kFm1NJn8LE9XShH
59_i8J0PH5ZZyNfGy2xGdULU7sHNF6Gp
2vPLgNZ__deLKxGHZ7PcHALUzoOegEI-
8E66jX2E4zyJKx-YxzZIItRzC5hlRirb
6Y5Cl_p-ko3YvkkysZIFNPccxRU7qve1
WYPxqbb2Yw8kZqa2rMWI5ng8OtvzlV7e
lprCbuPhcCdZ6XDP0_F8rkXds2vE4X-n
cOIM8hAYHHi29NX0mcKiRaD0-D-ljQTP
-cFPgwCp6X-nZZd9OHBv-B3oWh2TbqmS
cqXMR4gp_A.AxY8DCtDaGlsbGljb3RoZ
Q.KDlTtXchhZTGufMYmOYGS4HffxPSUr
fmqCHXaI9wOGY.9hH0vgRfYgPnAHOd8s
tkvw
```

Protected header

```json
{
  "alg": "RSA1_5",
  "enc": "A128CBC-HS256",
	...
}
```

> 💡 `alg` is the symmetric/asymmetric algorithm used to encrypt and decrypt the CEK
`enc` is the (symmetric) algorithm used to encrypt the actual content using CEK

Encrypted key ("key encryption", "content encryption key")

```json
lsndfvndf
```

Initialisation vector

```json
AxY8DCtDaGlsbGljb3RoZ
```

Encrypted data ("content encryption")

```json
KDlTtXchhZTGufMYmOYGS4HffxPSUr
fmqCHXaI9wOGY
```

> 💡 For nested JWS, sign payload then encrypt.

Authentication tag

```json
9hH0vgRfYgPnAHOd8s
tkvw
```

---

```json

 private key / secret key
          ↓
lsndfvndf → I_AM_THE_KEY
                ↓
     KDlTtXchhZ → secret_message
```
