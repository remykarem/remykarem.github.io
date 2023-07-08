# Variables

`readonly MYVAR=astring`

`unset`

`MYVAR=lol`

`export MYVAR=lol` New forked processes will inherit this

`local MYVAR=lol`  Local scope for functions only

`env`  **S**ee exported variables

`printenv ""`

`compgen -v` See all variables

## Special variables

`$#` no. of positional parameters

`$?` exit status of most recently executed program

## Parameter expansion

```bash
echo ${SOME_VAR+x}
SOME_VAR=123
echo ${SOME_VAR+x}
``` 

or

```bash
echo ${SOME_VAR:+x}
```
