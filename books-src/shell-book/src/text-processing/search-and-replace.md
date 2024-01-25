# Search and replace

Replace all newline characters with a space

```sh
tr '\n' ' '
```

Delete all newline characters

```sh
tr -d '\n'
```

Replace newline character with newline character literal (`\n`)

```sh
awk '{ printf "%s\\n", $0 }'
```
