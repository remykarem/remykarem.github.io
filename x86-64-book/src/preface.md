# Preface

`run.sh`:

```bash
nasm -f macho64 $1.asm && \

ld -L /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/lib \
  -lSystem \
  -macosx_version_min 10.12 \
  -no_pie \
  $1.o && \

./a.out
```

Run with

```bash
./run.sh 02-syscall
```

Others:

Registers for syscall arguments: rdi, rsi, rdx, rcx, r8, r9
https://en.wikipedia.org/wiki/X86_calling_conventions#x86-64_Calling_Conventions

## Resources

https://cs.lmu.edu/~ray/notes/nasmtutorial/
https://cs.brown.edu/courses/cs033/docs/guides/x64_cheatsheet.pdf
