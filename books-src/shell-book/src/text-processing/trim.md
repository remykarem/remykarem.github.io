# Trim

## Trim leading and trailing newline characters

```sh
echo "\n\nhello\n\n\n" | awk '{printf "%s",$0}'
```

## Trim leading

```sh
sed 's/^ //'
```

or for any no. of spaces

```sh
sed 's/^ *//'
```

or for any no. of whitespaces

```sh
sed 's/^[[:space:]]*//
```

## Trim trailing

```sh
sed 's/ $//'
```

or for any no. of spaces

```sh
sed 's/ *$//'
```

or for any no. of whitespaces

```sh
sed 's/[[:space:]]*$//
```
