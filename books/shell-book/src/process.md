# Process

## **Exit codes**

Exit code | Meaning
--|--
`0` | OK
`1` | General error
`2` | Misuse of shell builtin command
`3-125` | (Up to developer to use)
`126` | Permission problem or command not executable
`127` | No file found matching this command
`128` | Invalid exit argument
`128+n` | Process killed with signal n

---

`top` monitor processes and system resource usage

`**ps**` process status

Common: `ps aux`

* `a` all users

* `u` display a user-oriented format that includes `%cpu,%mem,vsz,rss,stat`

* `x` show processes not attached to terminal

* `-O`  ****add header (separate by commas). 

    the following will be shown by default:

    * `pid` process id

    * `tty` controlling terminal

    * `time` time since start

    * `command` name of the command that is running

    others:

    * `%cpu`: % of time the process used CPU

    * `%mem`: % of real memory used by process

    * `vsz`: size (kb) used in virtual mem

    * `rss`: real size (kb) of mem

    * `stat`: status of process

```
S    interruptible sleep (waiting for an event to occur)
R    running or runnable (on run queue)
--------------------------
s    is a session leader
l    is multi-threaded (using CLONE_THREAD, like NPTL pthreads do)
+    is in the foreground process group.
```

`-U <user>` someuser
