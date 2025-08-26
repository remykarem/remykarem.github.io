# ASN.1

[X.680](http://www.itu.int/rec/T-REC-X.680/en) (ASN.1), [X.690](https://www.itu.int/rec/T-REC-X.690/en) (Encoding rules)

Example ASN.1 specification:

```asn1
FooProtocol DEFINITIONS ::= BEGIN

    FooQuestion ::= SEQUENCE {
        trackingNumber INTEGER,
        question       IA5String
    }

    FooAnswer ::= SEQUENCE {
        questionNumber INTEGER,
        answer         BOOLEAN
    }

END
```

Corresponding example of data in binary:

```
30 13 02 01 05 16 0e 41 6e 79 62 6f 64 79 20 74 68 65 72 65 3f
```

which is the serialised data (in this case DER-encoded) for trackingNumber `05` and question `"Anybody there?"`.

## Encoding methods

* DER (to binary)
* BER (to binary)
* PER (to binary)
* XER (to XML)
* JER (to JSON)

### DER

The DER encoding method follows a **type**-**length**-**value** syntax.

* **type**: can be primitive or constructed
* **length** (at least 1 byte): the number of octets depends on the size of the **value**
* **value**

Example using OpenSSL.

Given an ASN.1 definition

```
RSAPrivateKey ::= SEQUENCE {
    version           Version,
    modulus           INTEGER,  -- n
    publicExponent    INTEGER,  -- e
    privateExponent   INTEGER,  -- d
    prime1            INTEGER,  -- p
    prime2            INTEGER,  -- q
    exponent1         INTEGER,  -- d mod (p-1)
    exponent2         INTEGER,  -- d mod (q-1)
    coefficient       INTEGER,  -- (inverse of q) mod p
    otherPrimeInfos   OtherPrimeInfos OPTIONAL
}
```

we will serialise an RSA private key whose data is in `rsaprivatekey.cnf`

```
asn1=SEQUENCE:private_key
[private_key]
version=INTEGER:0

n=INTEGER:0xBB6FE79432CC6EA2D8F970675A5A87BFBE1AFF0BE63E879F2AFFB93644\
D4D2C6D000430DEC66ABF47829E74B8C5108623A1C0EE8BE217B3AD8D36D5EB4FCA1D9

e=INTEGER:0x010001

d=INTEGER:0x6F05EAD2F27FFAEC84BEC360C4B928FD5F3A9865D0FCAAD291E2A52F4A\
F810DC6373278C006A0ABBA27DC8C63BF97F7E666E27C5284D7D3B1FFFE16B7A87B51D

p=INTEGER:0xF3929B9435608F8A22C208D86795271D54EBDFB09DDEF539AB083DA912\
D4BD57

q=INTEGER:0xC50016F89DFF2561347ED1186A46E150E28BF2D0F539A1594BBD7FE467\
46EC4F

exp1=INTEGER:0x9E7D4326C924AFC1DEA40B45650134966D6F9DFA3A7F9D698CD4ABEA\
9C0A39B9

coeff=INTEGER:0x30B9E4F2AFA5AC679F920FC83F1F2DF1BAF1779CF989447FABC2F5\
628657053A
```

using the command

```
openssl asn1parse -genconf rsaprivatekey.cnf -noout -out key.der
```

and see the binary:

```
30820118020100024100bb6fe79432cc6ea2d8f970675a5a87bfbe1aff0b
e63e879f2affb93644d4d2c6d000430dec66abf47829e74b8c5108623a1c
0ee8be217b3ad8d36d5eb4fca1d9020301000102406f05ead2f27ffaec84
bec360c4b928fd5f3a9865d0fcaad291e2a52f4af810dc6373278c006a0a
bba27dc8c63bf97f7e666e27c5284d7d3b1fffe16b7a87b51d022100f392
9b9435608f8a22c208d86795271d54ebdfb09ddef539ab083da912d4bd57
022100c50016f89dff2561347ed1186a46e150e28bf2d0f539a1594bbd7f
e46746ec4f0221009e7d4326c924afc1dea40b45650134966d6f9dfa3a7f
9d698cd4abea9c0a39b9022030b9e4f2afa5ac679f920fc83f1f2df1baf1
779cf989447fabc2f5628657053a
```

(Notice the `628657053A` in coeff that also appears in the last octets of the binary.)
