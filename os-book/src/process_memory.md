# Process memory

## Windows OS

**## Windows OS**

- PE file format - format for all executables

- Header

- Import

- Export

- Timestamp

- Sections

- `.text`

- `.rdata`

- `.data`

- `.rsrc`

## Data representation

* Intel CPUs: least significant address ("endian") is put a lower address ("little"). This is called **little endian**.

For example, the data `0x4f9c3d` is represented as such:

```txt
address data

   0x11
   0x10
   0x09
   0x08 4f
   0x07 9c
   0x06 3d
   0x05
   0x04
   0x03
   0x02
   0x01
```

## Process memory layout

```
+----------------------------------+
| text                             |  <- low address
+----------------------------------+
| Initialised data segment         |
+----------------------------------+
| Uninitialised data segment (BSS) |
+----------------------------------+
|                                  |
| Heap                             |
|                                  |
+----------------------------------+
|                                  |
| (Unused memory)                  |
|                                  |
+----------------------------------+
|                                  |
| Stack                            | 
|                                  | <- high address
+----------------------------------+
```

```admonish note
When people say stack grows "downwards", it means that the stack grows towards _lower_ memory address. It does not correspond to a physical direction.

In Intel systems, stacks grow downwards.

Note that these are conventions; actual layout varies depending on the OS.
```

Stack:

```
+----------------------+
| Current stack frame  | <- low address
+----------------------+
| Stack frame          |
+----------------------+
| Stack frame          | <- high address
+----------------------+
```

Stack frame:

```
+-------------------+
| Local variable n  | <- low address
+-------------------+
| ...               |
+-------------------+
| Local variable 2  |
+-------------------+
| Local variable 1  |
+-------------------+
| Old ebp           |
+-------------------+
| Return address    |
+-------------------+
| Argument 1        |
+-------------------+
| Argument 2        |
+-------------------+
| Argument 3        |
+-------------------+
| ...               |
+-------------------+
| Argument n        | <- high address
+-------------------+
```

- text
- initialised data
- uninitialised data
- stack
    - a stack frame is added whenever a function is called
- heap


[von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture).

```
1. caller (in caller)
	 a. save registers
	 b. push parameters on stack
	 c. push return address on stack

2. callee (in function prolog) 
	 a. push rbp
	 b. mov rbp;rsp
	 c. sub rsp,0x10

3. callee (in function epilog)
   a. add rsp,0x10
   b. pop rbp
   c. ret

4. caller (after return)
```

EAX used in multiplication and division
• EBP and ESP are used for tracking the stack
• EAX is used to store the return value for call
• ECX is used as a counting variable
• ESI and EDI are used for copying data in loops
• (Source and Destination)
