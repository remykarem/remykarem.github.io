# Redirects

`>` redirects stdout

`2>` redirects stderr

`<` redirects stdin

`|` Pipe: passes a standard output as the standard input

`command 2> errors.txt`

`command > log.txt 2> errors.txt`

`command > log.txt 2>&1` **R**edirect stderr to stdout

`command 2> /dev/null`

`command 2>&1` redirect stderr to stdout
