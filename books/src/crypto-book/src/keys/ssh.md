# SSH

Generate a new key pair.

```
ssh-keygen -t <alg> -b 2048
```

Convert OpenSSH public key into SSH2 public key: 

```
ssh-keygen -e -f <public-key-filename> > <new-public-key-filename>
```

Run `man ssh-keygen` for more info.
