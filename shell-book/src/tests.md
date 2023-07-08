# Tests

`$?` result of last executed command

`0` means true; `1` means false

`[...]` is the same as **test**

`[ 1 = 1 ]`

`[ ... -o ... ]` or

`[ ... -a ... ]` and

`[ ! ... ]` not

`[ -f some_file ]` check if dir exists

`[ -d some_dir ]` check if dir exists

`[ -z "$MYVAR" ]` check if env var DOES NOT exist.

`[[ 2 < 10 ]]` numerical test

`[[ ... -lt ... ]]`

`-lt` `-gt` `-eq` `-ne`

`if [ -z "${VAR}" ];` if VAR is empty
