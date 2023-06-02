# Split

## Format a string into lines of 64 characters

```shell
fold -w 64
```

## Get the 4th value of a comma-delimited line:

```sh
awk -F ',' '{printf $2}'
```

```admonish tip
Play around with `print` and `printf`
```
