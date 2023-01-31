# Checksum

The goal of checksum is to verify integrity.

It's common to check checksums when downloading files from websites.

* Anaconda uses [MD5](md5.md) to compare checksums. [Here](https://anaconda.org/conda-forge/boto3/files) is an example of the usage of checksum for boto3 package which is an AWS client (click on the (i) icon).

```
echo -n "hello" | openssl md5
```

> 💡 Take note of the newlines at the end of files

## RSA key pair

To compare between a private and public key, compare the modulus:

```bash
openssl rsa -in private.pem -modulus -noout
```

```bash
openssl rsa -pubin -in public.pem -modulus -noout
```

## SSH key pair

You can use SSH fingerprints to compare between any two keys. A key pair should have the same fingerprint.

? Not sure what values these fingerprints are based on.

```bash
ssh-keygen -l -E <hash> -f <key>
```

SSH has a cute way to represent keys visually:

```bash
ssh-keygen -l -v -f <key>
```
