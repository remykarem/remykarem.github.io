# File descriptor

There is a limit to no. of open file descriptors the OS allows for any process.

~~~admonish tip title="How to check limits?"
Limit for the current shell:

```
ulimit -n
```

Check limits in macOS:

```
launchctl limit maxfiles
```

Check files open for a process in macOS:

```
lsof -p <PID>
```

Linux (?):

```
cat /proc/<PID>/limits
```
~~~
