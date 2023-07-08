# Signals and traps

`kill -[INT|TERM^|KILL|QUIT] <process-id>`

`kill -l` or `man signal`

inter-process communication

| Signal  | Description                                                                                                                                                         | Ignorable? | Shortcut       | Command             | Signal integer |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- | ------------------- | -------------- |
| SIGTERM | Terminate (normal exit, cleanly, polite). Might take time to save state, free resources like temp files etc.                                                        | Yes        |                | `kill -SIGTERM <pid>` | 15             |
| SIGINT  | Interrupt program (merciful kill). Some non-interactive programs treat it like SIGTERM. Can be generated from the terminal.                                         | Yes        | Ctrl+C         |                     | 2              |
| SIGQUIT | Quit program. Harshest. When something is seriously very wrong. Creates a core dump. Most applications do not save the state. _Can be generated from the terminal._ | Yes        | Ctrl+\\, Ctrl+D |                     | 3              |
| SIGKILL | Kill program (non-catchable merciless kill)                                                                                                                         | No         |                | `kill -9 <pid>`       | 9              |
| SIGTSTP | Pause / suspend a process and go into background. Resume execution only if SIGCONT is sent.                                                                         | No         | Ctrl+Z         | `kill -SIGSTOP <pid>` | 18             |
| SIGCONT | Continue after being paused / suspended.                                                                                                                            |            |                | `kill -SIGCONT <pid>` |                |
| SIGINFO | Status request from keyboard                                                                                                                                        |            | Ctrl+T         |                     | 29             |
| SIGHUP  | Automatically sent to a process when the terminal it is running in is closed.                                                                                       |            |                |                     | 1              |
