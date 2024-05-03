# Search and replace

Replace all newline characters with a space

```sh
tr '\n' ' '
```

Delete all newline characters

```sh
tr -d '\n'
```

Replace all newline characters with a newline character literal `\n` (taken from [here](https://stackoverflow.com/a/43967678)).

```sh
sed '$!s/$/\\n/g' | tr -d '\n'
```

Replace all newline character literals `\n` with a newline character

```sh
sed 's/\\n/\n/g'
```
