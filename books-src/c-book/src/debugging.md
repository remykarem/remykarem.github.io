# Debugging

Debugging

```
**nm a.out** symbol table

**otool -tV a.out** disassembled assembly instructions

**pagestuff a.out -a**

**objdump a.out
	-syms** symbol table
	**--disassemble
	--headers**

**pagestuff a.out -a**
```

Debugging using LLDB

```python
b main
b functionName
r run
n next
p/x a
p/x &a
p/x $rbp
x &a
x/x &a
x/4xb examine 4 values formatted in hex, 1 byte at a time
register read flags
register read --all
```
