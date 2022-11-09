# Redirects

No. | Operator | Meaning
--|---|---
1 | `command > file` | redirects stdout to `file`
1 | `command >> file` | redirects stdout to `file` by appending
1 | `command 2> file` | redirects stderr to `file`
1 | `command < file` | redirects stdin. gives input from `file` to `command`
1 | `command << EOF ... EOF` | here document
1 | `command <<< sometext` | here string
1 | `|` | Pipe: passes a standard output as the standard input
1 | `command 2>&1` | redirect stderr to stdout

1 | `command > file 2>&1` | Redirect stderr to stdout
1 | `command > file1 2> file2` | ff
1 | `command 2> /dev/null` | ff

> `>` is the same as `1>`

> A **here document** or **here string** is a file literal or input stream literal. The former is multiline.
