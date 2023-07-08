# Instructions

https://www.cs.virginia.edu/~evans/cs216/guides/x86.html

```
**Registers**
----------------------------------------
| register 1 | register 2 | register 3 |
----------------------------------------

**Memory**
               --------------
Address 0x1070 | <contents> |
Address 0x1071 | <contents> |
Address 0x1072 | <contents> |
Address 0x1073 | <contents> |
               --------------
```

|  |  |  |
| --- | --- | --- |
| Register | EAX, AX, EBP | <reg> |
| Constant | 0x13 | <const> |
| Memory address | [eax], [var+4], dword ptr [eax+ebx] | <mem> |

`var` — location ~ &var

`[var]` — value at location var ~ *var

`mov`

`push <operand>`

1. Decrements ESP by 4 (stack grows from high address to low address)
2. <operand> goes into ESP 
3. 

```x86asm
push S    push Source onto stack
mov  D,S  move Source to Destination
pop  D    pop top of stack into Destination
push
xorl A,B  zeroing
leaq S,D  load effective address; load address of S in D
```

inc
dec
neg
not

```x86asm
pushq %rbp
= subq $8, %rsp
mov %rbp, (%rsp)
```

https://stackoverflow.com/questions/4584089/what-is-the-function-of-the-push-pop-instructions-used-on-registers-in-x86-ass
