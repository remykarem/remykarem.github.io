# Trim

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
