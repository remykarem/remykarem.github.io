# File

Get 3rd line

```sh
sed -n '3p'
```

```admonish
`-n` — don't print unnecessary stuff..
`p` stands for print
```

Get 4th to 8th lines:

```sh
sed -n '4,8p'
```

Remove lines

```sh
sed '1d;$d'
```

To remove last 4 lines

```sh
tail 
```
