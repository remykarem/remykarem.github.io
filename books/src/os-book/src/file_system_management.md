# File system management

iNodes data structure

Linux FHS (Filesystem Hierarchy Standard)

```
├── bin  command binaries eg. ls, mv
├── sbin bin for superuser eg. shutdown, reboot
├── dev  device files (interface to devices)
├── etc  "everything to configure"; system-wide config files
├── home users’ home directories
├── opt  optional application software packages eg. gradle
├── tmp  temporary files
├── lib  common libraries for system programs
├── var  variable files (system and application logs) 
    └── lib         State information. Persistent data modified by programs as they run (eg. databases)
└── usr read-only user data
    ├── bin         system-installed binaries eg. gcc
    ├── lib         system-installed libraries (static & dynamic)
    ├── libexec
    ├── sbin
    ├── share
    ├── standalone
    └── local
        ├── Caskroom
        ├── Cellar
        ├── Frameworks
        ├── Homebrew
        ├── bin           user-installed binaries eg. rustc
        ├── etc
        ├── include       user-installed headers
        ├── lib           user-installed libraries (static & dynamic)
        ├── man
        ├── opt
        ├── remotedesktop
        ├── share
        ├── texlive
        └── var
```

`/etc/hosts`

map hostname to IP address

---

a file is a stream of data

The OS provides 3 files that are always open to every running process:

- stdin (standard input)
- stdout (standard output)
- stderr (standard error)

Another file that is open:

tele typewriter aka tty.

```bash
$ tty
/dev/ttys001
```