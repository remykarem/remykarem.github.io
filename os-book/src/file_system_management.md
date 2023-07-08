# File system management

iNodes data structure

Linux FHS (Filesystem Hierarchy Standard)

`/`:

| Folder  |                           |              | Examples            |
| ------- | ------------------------- | ------------ | ------------------- |
| `bin`  | Basic shell commands      | User         | `ls`                |
| `sbin` | System binaries           | Admin        | `ifconfig`, `md5`   |
| `lib`  | Source code for binaries  | User         | (not in macOS)      |
| `etc`  | Configs                   | Admin        | `passwd`, `hosts`   |
| `dev`  | Device files              |              | `stdout`, `ttys002` |
| `home` | User data                 | User         | (not in macOS)      |
| `opt`  | Optional software         | User         | `gradle`            |
| `tmp`  | Temp files                | Applications |
| `var`  | Runtime info like logging | Applications |                     |
| `proc` | Process and kernel files  | ?            | `lscpu`             |

`/usr`:

| Folder   |                  |       | Examples |
| -------- | ---------------- | ----- | -------- |
| `bin`   | Binaries         | User  | `gcc`    |
| `sbin`  | Binaries         | Admin |
| `lib`   | System libraries | ?     |
| `share` | Docs             | User  |

`/usr/local`:

| Folder        |                 |       | Examples               |
| ------------- | --------------- | ----- | ---------------------- |
| `bin`        | Binaries        | User  | `node`, `python3`      |
| `opt`        | Binaries        | User  | `nasm`, `openssl`      |
| `lib`        | Libraries       | User  | `libopencv_text.dylib` |
| `include`    | Header files    | User  |
| `sbin`       | System binaries | Admin |
| `Frameworks` | ?               |       |

macOS:

| Hi              |
| --------------- |
| `Applications` |
| `Library`      |
| `System`       |
| `Users`        |
| `Volume`       |

Home directory:

| Folder          |     |     | Examples |
| --------------- | --- | --- | -------- |
| `Applications` |
| `Desktop`      |
| `.config`      |

```admonish note
* `etc` probably stands for "everything to configure"
* Files in `tmp` are emptied when restarted
```

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
