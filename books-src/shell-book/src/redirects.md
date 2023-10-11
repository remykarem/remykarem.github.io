# Redirects

| Operator                   | Meaning                                               |
| -------------------------- | ----------------------------------------------------- |
| <code>&#124;</code>        | redirects stdout to stdin                             |
| `command > file`           | redirects stdout to `file`                            |
| `command >> file`          | redirects stdout to `file` by appending               |
| `command 2> file`          | redirects stderr to `file`                            |
| `command < file`           | redirects stdin of `command` from `file`. i.e. input of command comes from `file`|
| `command << EOF ... EOF`   | here document                                         |
| `command <<< sometext`     | here string                                           |
| `command 2>&1`             | redirect stderr to stdout                             |
| `command > file 2>&1`      | Redirect stderr to stdout                             |
| `command > file1 2> file2` | ff                                                    |
| `command 2> /dev/null`     | ff                                                    |

```admonish note
`>` is the same as `1>`
```

```admonish warning title="Gotcha"
`1>&0` isn't a valid redirection.
```

```admonish note
A **here document** or **here string** is a file literal or input stream literal. The former is multiline.
```
