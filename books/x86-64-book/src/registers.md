# Registers

Internal memory storage location. Nearly all computer load data from main memory into registers in order to perform computations

- General register
    - Data register
    - Pointer register
    - Index register
- Control register
- Segment register

Operands can be

- Immediate values eg. `` `$0x5`
- Registers eg. `%eax`
- Memory address eg.  `%rbp`
- Labels (?)

```
	 8   4    2   1
%rax %eax %ax %al  accumulator
%rbx %ebx %bx %bl  base
%rcx %ecx %cx %cl  counter
%rdx %edx %dx %dl  data
```

```python
%rsi %esi %si %sil   source idx. function param
%rdi %edi %di %dil   dest idx. function param
```

```python
%rbp %eax %ax %al base pointer
%rsp %eax %ax %al stack pointer
```

```wasm
%r8 %eax %ax %al function param
%r9 %eax %ax %al function param
```

```wasm
%r10 %eax %ax %al
%r11 %eax %ax %al
```

```wasm
%r12 %eax %ax %al
%r13 %eax %ax %al
%r14 %eax %ax %al
%r15 %eax %ax %al
```

Other registers

```
%rip instruction pointer
```

Note: %rbp always has a higher value than %rsp because the stack starts at a high memory address and grows downwards.

```wasm
Suffixes for instructions
b = byte = 8 bits
w = word = 16 bits = 1 byte
l = long = 32 bits = 4 bytes
q = quadword = 64 bits = 8 bytes
t = ten bytes = 80 bits = 80 bytes
```
