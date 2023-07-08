# Syntax

## Instruction

Move value 4 to register rax

Intel

```x86asm
mov rax, 4   
```

AT&T

```armasm
mov $4, %rax
```

## Referencing

Memory address

Intel

```x86asm
rax
```

AT&T

```armasm
%rax
```

## Dereferencing

Value at memory address

Intel

```x86asm
[rax]
```

AT&T

```armasm
(%rax)
```

## Addressing memory

```x86asm
mov eax, [ebx]    ; move the 4 bytes in memory at address contained in EBX 
```
