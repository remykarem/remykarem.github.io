# Text processing

Text processing in shell can follow the functional programming pattern if we see input to a function (command) as the *standard input*, and the output as the *standard output*.

```admonish note title="Reminder"
Recall that *standard input*, *standard output* and *standard error* are also files.
```

This means we're gonna be using a lot of the pipe operator, which channels the current output to the next command's input.

A common convention in Unix-like systems is that a command should read from the standard input by default if no file is specified. If the command doesn't follow the convention, we can specify the `/dev/stdin` explicitly.
