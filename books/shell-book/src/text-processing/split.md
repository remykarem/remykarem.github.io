# Split

## Get the 4th value of a comma-delimited line:

```sh
awk -F ',' '{printf $2}'
```

## Get last value of a comma-delimited line:

```sh
awk -F ',' '{printf $NF}'
```

```admonish tip
Play around with `print` and `printf`
```

```admonish tip
* `$NF` — no. of fields
* `$NR` — no. of rows
```