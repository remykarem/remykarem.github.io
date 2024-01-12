# Map, split

## Update a line

```sh
awk '{ printf "Hello %s",$7 }'
```

## Get the 2nd value of a line whose columns are separated by whitespaces:

```sh
awk '{ printf $4 }'
```

## Get the 4th value of a comma-delimited line:

```sh
awk -F ',' '{ printf $4 }'
```

## Get last value of a comma-delimited line:

```sh
awk -F ',' '{ printf $NF }'
```

```admonish tip
Play around with `print` and `printf`
```

```admonish tip
* `$NF` — no. of fields
* `$NR` — no. of rows
```
