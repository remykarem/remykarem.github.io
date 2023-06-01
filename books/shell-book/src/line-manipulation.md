# Line manipulation

```admonish tip
Play around with `print` and `printf`
```

Get the 4th value of a comma-delimited line:

```sh
awk -F ',' '{printf $2}'
```

Append a string before

```sh
awk '{printf "ooo"}1'
```

or

```sh
echo "$(cat filename)_suffix"
```
