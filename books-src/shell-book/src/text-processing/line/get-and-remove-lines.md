# Get and remove lines

Get 3rd line

```sh
sed -n '3p'
```

```admonish tip title="sed"
`-n` — don't print unnecessary stuff.. (?)
`p` stands for print
`d` stands for delete
```

Get 4th to 8th lines:

```sh
sed -n '4,8p'
```

```sh
awk 'NR>=4 && NR<=8'
```

Remove lines

```sh
sed '1d;$d'
```

To remove last 4 lines

```sh
tail 
```

Get kth line onwards:

```sh
awk 'NR>=k
```

```sh
sed -n 'k,$p'
```

```sh
tail -n +k
```
