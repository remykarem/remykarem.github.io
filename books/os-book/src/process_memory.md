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

- text
- initialised data
- uninitialised data
- stack
    - a stack frame is added whenever a function is called

    - in intel systems, stack grows *downwards* (high address to low address)

    - a stack frame (notice it goes upwards)
- heap


[von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture).

```
Address 

                                         0xdec3
                                         0xdec2
                                         0xdec1
                                         0xdec0 <- rbp (0?) 
            3c) ret;                     0xdebf         
         move up thru                    0xdebe         
                                         ..            function parameters
                                         0xdeb2
                                         0xdeb1
                                         0xdeb0 <- rsp (1?) (initial rsp); where the stack pointer points at initially
                                         0xdeaf // return address
                                         0xdeae // return address
                                         0xdead // return address
                  (3c) ret;              0xdeac // return address
       return to this address            0xdeab // return address
                                         0xdeaa // return address
                                         0xdea0 // return address
                                         0xdea9 // return address
$rsp moved up 8 bytes because value
  of the previous base pointer is 
  goes back into the RBP register
                    pop rbp; (3b) rsp -> 0xdea8 <- rsp (1c) (call); $rsp moved down 8 bytes because a return address (8 bytes) is pushed
                                         0xdea7 // prev. base pointer aka prev frame
                                         0xdea6 // prev. base pointer aka prev frame
                                         0xdea5 // prev. base pointer aka prev frame
                                         0xdea4 // prev. base pointer aka prev frame
                                         0xdea3 // prev. base pointer aka prev frame
                                         0xdea2 // prev. base pointer aka prev frame
                                         0xdea1 // prev. base pointer aka prev frame
**$rsp moved up through 
            local variables; (3a) rsp** -> 0xdea0 <- rsp (2a) push rbp; $rsp moved down 8 bytes because value of RBP is pushed.
                                                <- rbp (2b) mov rbp,rsp; set $rbp's value to the value of $rsp
                                                ******** new base pointer ********
                                         0xde99 // local variables
                                         0xde98 // local variables
                                         0xde97 // local variables
                                         0xde96 // local variables
                                         0xde95 // local variables
                                         0xde94 // local variables
                                         0xde93 // local variables
                                         0xde92 // local variables
                                         0xde91 // local variables
                                         0xde90 <- rsp (2c) sub rsp,0x10; $rsp moved down to make space for local variables
                                                ******** new stack pointer ********
```

EAX used in multiplication and division
• EBP and ESP are used for tracking the stack
• EAX is used to store the return value for call
• ECX is used as a counting variable
• ESI and EDI are used for copying data in loops
• (Source and Destination)
