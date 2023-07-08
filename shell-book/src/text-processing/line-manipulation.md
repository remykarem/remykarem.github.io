# Append and prepend

## Prepend to a string

```sh
awk '{printf $0"ooo"}'
```

## Append to a string

```sh
awk '{printf "ooo"$0}'
```
