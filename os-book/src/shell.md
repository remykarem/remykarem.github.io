# Shell

Every terminal you open gets assigned a new file via `tty`.

tty is a file

Every time you write a command on the terminal, the shell creates a duplicate process (via `fork()`).

**Shell:** a user interface to send commands to OS. “Shell” because it is the outermost layer around the OS’s “kernel.”

- CLI shells
    - Unix shells
        - Bourne Shell (sh)
        - Bourne-Again Shell (bash)
        - Z Shell (zsh)
        - Xonsh
    - Windows shells
        - CMD
        - PowerShell
        - Windows subsystem for Linux (WSL)
- GUI shells

**Terminal emulator / terminal**: a graphical application to access shell

- macOS terminals
    - Terminal
    - iTerm2
    - Hyper
- Windows terminals
    - Command Prompt
    - Cygwin
    - Windows Terminal
