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

Replace newline character literal (`\n`) with a newline character

```sh
sed 's/\\n/\n/g'
```
